import fs from "fs";
import path from "path";
import { glob } from "glob";
import prettier from "prettier";

const COMPONENTS_DIR = "app/registry/default/components";
const REGISTRY_FILE = "registry.json";

const IGNORED_DEPENDENCIES = ["vue"];

function convertRegistryPathToUrl(importPath) {
  const match = importPath.match(/@\/registry\/default\/ui\/([^/]+)/);
  if (match) {
    const componentName = match[1];
    return `https://originui-vue.com/r/${componentName}.json`;
  }
  return null;
}

async function checkImports() {
  const registryContent = fs.readFileSync(REGISTRY_FILE, "utf8");
  const registry = JSON.parse(registryContent);

  const files = await glob(`${COMPONENTS_DIR}/**/*.vue`);
  const dependencyMap = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const componentName = path.basename(file, ".vue");

    // Check for script section
    const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
    if (!scriptMatch) {
      continue;
    }

    const scriptContent = scriptMatch[1];
    const imports =
      scriptContent.match(/import\s+.*?from\s+['"](.*?)['"]/g) || [];

    if (imports.length > 0) {
      const dependencies = new Set();
      const registryDeps = new Set();

      imports.forEach((imp) => {
        const importPath = imp.match(/from\s+['"](.*?)['"]/)[1];

        // Skip ignored dependencies
        if (IGNORED_DEPENDENCIES.includes(importPath)) {
          return;
        }

        // Handle registry imports
        const registryUrl = convertRegistryPathToUrl(importPath);
        if (registryUrl) {
          registryDeps.add(registryUrl);
          return;
        }

        // Handle package dependencies
        if (!importPath.startsWith("./") && !importPath.startsWith("../")) {
          if (!importPath.startsWith("@/")) {
            dependencies.add(importPath);
          }
        }
      });

      // Update registry.json for this component
      const componentIndex = registry.items.findIndex(
        (item) => item.name === componentName,
      );
      if (componentIndex !== -1) {
        const component = registry.items[componentIndex];
        const depsArray = Array.from(dependencies);
        const registryDepsArray = Array.from(registryDeps);

        // Create updated component without dependencies if they're empty
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

        // Only update if there are changes
        const hasChanges =
          JSON.stringify(component) !== JSON.stringify(updatedComponent);

        if (hasChanges) {
          registry.items[componentIndex] = updatedComponent;
          console.log(`📝 Updated ${componentName}:`);
          if (depsArray.length > 0) {
            console.log(`   Dependencies: ${depsArray.join(", ")}`);
          }
          if (registryDepsArray.length > 0) {
            console.log(
              `   Registry Dependencies: ${registryDepsArray.join(", ")}`,
            );
          }
        }
      }

      if (dependencies.size > 0) {
        dependencyMap.set(componentName, Array.from(dependencies));
      }
    }
  }

  // Write updated registry back to file with Prettier formatting
  const formattedRegistry = await prettier.format(JSON.stringify(registry), {
    parser: "json",
    printWidth: 60,
    htmlWhitespaceSensitivity: "ignore",
  });

  fs.writeFileSync(REGISTRY_FILE, formattedRegistry);

  console.log("\n📊 Summary:");

  // Output unique dependencies used
  const allDependencies = new Set();
  dependencyMap.forEach((deps) =>
    deps.forEach((dep) => allDependencies.add(dep)),
  );

  console.log("\n📦 Unique dependencies used (excluding vue):");
  allDependencies.forEach((dep) => {
    if (!IGNORED_DEPENDENCIES.includes(dep)) {
      console.log(`   ${dep}`);
    }
  });
}

checkImports().catch(console.error);
