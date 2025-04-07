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

function getRegistryUrl(importPath) {
  for (const pattern of REGISTRY_PATTERNS) {
    const match = importPath.match(pattern);
    if (match) {
      return `https://originui-vue.com/r/${match[1]}.json`;
    }
  }
  return null;
}

function extractImports(scriptContent) {
  const dependencies = new Set();
  const registryDeps = new Set();

  const importBlocks =
    scriptContent.match(
      /import\s+{[\s\S]*?}.*?from\s+['"](.*?)['"];?|import\s+.*?from\s+['"](.*?)['"];?/g,
    ) || [];

  for (const imp of importBlocks) {
    const fromMatch = imp.match(/from\s+['"](.*?)['"]/);
    if (!fromMatch) continue;

    const importPath = fromMatch[1];
    if (CONFIG.ignoredDependencies.includes(importPath)) continue;

    const registryUrl = getRegistryUrl(importPath);
    if (registryUrl) {
      registryDeps.add(registryUrl);
      continue;
    }

    if (
      !importPath.startsWith("./") &&
      !importPath.startsWith("../") &&
      !importPath.startsWith("@/")
    ) {
      dependencies.add(importPath);
    }
  }

  return { dependencies, registryDeps };
}

function updateRegistry(registry, componentName, dependencies, registryDeps) {
  const componentIndex = registry.items.findIndex(
    (item) => item.name === componentName,
  );
  if (componentIndex === -1) return null;

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

  if (JSON.stringify(component) !== JSON.stringify(updatedComponent)) {
    registry.items[componentIndex] = updatedComponent;
    return {
      componentName,
      dependencies: depsArray,
      registryDeps: registryDepsArray,
    };
  }

  return null;
}

async function processComponent(file, registry) {
  const content = fs.readFileSync(file, "utf8");
  const componentName = path.basename(file, ".vue");
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);

  if (!scriptMatch) return null;

  const { dependencies, registryDeps } = extractImports(scriptMatch[1]);
  return updateRegistry(registry, componentName, dependencies, registryDeps);
}

async function checkImports() {
  try {
    const registry = JSON.parse(fs.readFileSync(CONFIG.registryFile, "utf8"));
    const files = await glob(`${CONFIG.componentsDir}/**/*.vue`);
    const updates = [];
    const dependencyMap = new Map();

    for (const file of files) {
      const result = await processComponent(file, registry);
      if (result) {
        updates.push(result);
        if (result.dependencies?.length) {
          dependencyMap.set(result.componentName, result.dependencies);
        }
      }
    }

    const formattedRegistry = await prettier.format(
      JSON.stringify(registry),
      CONFIG.prettier,
    );
    fs.writeFileSync(CONFIG.registryFile, formattedRegistry);

    console.log(
      `\n✅ Processed ${files.length} components, updated ${updates.length} entries`,
    );
  } catch (error) {
    console.error("❌ Error checking imports:", error);
    process.exit(1);
  }
}

checkImports();
