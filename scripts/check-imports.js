import fs from "fs";
import path from "path";
import { glob } from "glob";
import prettier from "prettier";

const CONFIG = {
  componentsDir: "app/registry/default/components",
  registryFile: "registry.json",
  ignoredDependencies: ["vue"],
  prettier: {
    parser: "json",
    printWidth: 60,
    htmlWhitespaceSensitivity: "ignore",
  },
};

const REGISTRY_PATTERNS = [
  /@\/registry\/default\/ui\/([^/'"]+)/,
  /@\/registry\/default\/components\/([^/'"]+)/,
  /@\/components\/ui\/([^/'"]+)/,
];

/**
 * Converts a registry import path to its corresponding URL
 * @param {string} importPath - The import path to convert
 * @returns {string|null} The converted URL or null if not a registry import
 */
function convertRegistryPathToUrl(importPath) {
  for (const pattern of REGISTRY_PATTERNS) {
    const match = importPath.match(pattern);
    if (match) {
      const componentName = match[1];
      return `https://originui-vue.com/r/${componentName}.json`;
    }
  }
  return null;
}

/**
 * Extracts imports from script content
 * @param {string} scriptContent - The content of the script tag
 * @returns {{ dependencies: Set<string>, registryDeps: Set<string> }}
 */
function extractImports(scriptContent) {
  const dependencies = new Set();
  const registryDeps = new Set();

  const importBlocks =
    scriptContent.match(
      /import\s+{[\s\S]*?}.*?from\s+['"](.*?)['"];?|import\s+.*?from\s+['"](.*?)['"];?/g,
    ) || [];

  importBlocks.forEach((imp) => {
    const fromMatch = imp.match(/from\s+['"](.*?)['"]/);
    if (!fromMatch) return;

    const importPath = fromMatch[1];

    if (CONFIG.ignoredDependencies.includes(importPath)) return;

    const registryUrl = convertRegistryPathToUrl(importPath);
    if (registryUrl) {
      registryDeps.add(registryUrl);
      return;
    }

    if (
      !importPath.startsWith("./") &&
      !importPath.startsWith("../") &&
      !importPath.startsWith("@/")
    ) {
      dependencies.add(importPath);
    }
  });

  return { dependencies, registryDeps };
}

/**
 * Updates component dependencies in the registry
 * @param {Object} registry - The registry object
 * @param {string} componentName - Name of the component
 * @param {Set<string>} dependencies - Package dependencies
 * @param {Set<string>} registryDeps - Registry dependencies
 * @returns {{ hasChanges: boolean, updatedComponent: Object }}
 */
function updateComponentInRegistry(
  registry,
  componentName,
  dependencies,
  registryDeps,
) {
  const componentIndex = registry.items.findIndex(
    (item) => item.name === componentName,
  );

  if (componentIndex === -1) return { hasChanges: false };

  const component = registry.items[componentIndex];
  const depsArray = Array.from(dependencies);
  const registryDepsArray = Array.from(registryDeps);

  const updatedComponent = { ...component };

  if (depsArray.length > 0) {
    updatedComponent.dependencies = depsArray;
  } else {
    delete updatedComponent.dependencies;
  }

  if (registryDepsArray.length > 0) {
    updatedComponent.registryDependencies = registryDepsArray;
  } else {
    delete updatedComponent.registryDependencies;
  }

  const hasChanges =
    JSON.stringify(component) !== JSON.stringify(updatedComponent);

  if (hasChanges) {
    registry.items[componentIndex] = updatedComponent;
  }

  return { hasChanges, updatedComponent, depsArray, registryDepsArray };
}

/**
 * Process a single component file
 * @param {string} file - Path to the component file
 * @param {Object} registry - The registry object
 * @returns {{ componentName: string, dependencies: Set<string>, updates: Object|null }}
 */
function processComponentFile(file, registry) {
  const content = fs.readFileSync(file, "utf8");
  const componentName = path.basename(file, ".vue");

  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (!scriptMatch) {
    return { componentName, dependencies: new Set(), updates: null };
  }

  const { dependencies, registryDeps } = extractImports(scriptMatch[1]);
  const updates = updateComponentInRegistry(
    registry,
    componentName,
    dependencies,
    registryDeps,
  );

  return { componentName, dependencies, updates };
}

/**
 * Main function to check imports and update registry
 */
async function checkImports() {
  try {
    const registryContent = fs.readFileSync(CONFIG.registryFile, "utf8");
    const registry = JSON.parse(registryContent);
    const files = await glob(`${CONFIG.componentsDir}/**/*.vue`);

    const dependencyMap = new Map();
    const updates = [];

    // Process all component files
    files.forEach((file) => {
      const {
        componentName,
        dependencies,
        updates: componentUpdates,
      } = processComponentFile(file, registry);

      if (dependencies.size > 0) {
        dependencyMap.set(componentName, Array.from(dependencies));
      }

      if (componentUpdates?.hasChanges) {
        updates.push({
          componentName,
          dependencies: componentUpdates.depsArray,
          registryDeps: componentUpdates.registryDepsArray,
        });
      }
    });

    // Write updated registry
    const formattedRegistry = await prettier.format(
      JSON.stringify(registry),
      CONFIG.prettier,
    );
    fs.writeFileSync(CONFIG.registryFile, formattedRegistry);

    // Log results
    if (updates.length > 0) {
      console.log("\n📝 Component Updates:");
      updates.forEach(({ componentName, dependencies, registryDeps }) => {
        console.log(`\n${componentName}:`);
        if (dependencies?.length > 0) {
          console.log(`  Dependencies: ${dependencies.join(", ")}`);
        }
        if (registryDeps?.length > 0) {
          console.log(`  Registry Dependencies: ${registryDeps.join(", ")}`);
        }
      });
    }

    // Log unique dependencies
    const allDependencies = new Set();
    dependencyMap.forEach((deps) =>
      deps.forEach((dep) => allDependencies.add(dep)),
    );

    if (allDependencies.size > 0) {
      console.log("\n📦 Unique Dependencies:");
      Array.from(allDependencies)
        .filter((dep) => !CONFIG.ignoredDependencies.includes(dep))
        .sort()
        .forEach((dep) => console.log(`  ${dep}`));
    }

    console.log(
      `\n✅ Processed ${files.length} components, updated ${updates.length} entries`,
    );
  } catch (error) {
    console.error("❌ Error checking imports:", error);
    process.exit(1);
  }
}

checkImports().catch(console.error);
