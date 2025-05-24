import fs from "fs";
import path from "path";
import { glob } from "glob";
import prettier from "prettier";
import { exit } from "process";

const CONFIG = {
  componentsDir: path.resolve("app/registry/default/components"),
  registryDir: path.resolve("public/r"),
  registryFile: "registry.json",
  ignoredDependencies: ["vue"],
  prettier: {
    parser: "json",
    printWidth: 60,
    htmlWhitespaceSensitivity: "ignore",
  },
  supportedExtensions: [".vue", ".ts"],
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

function extractImports(content) {
  const dependencies = new Set();
  const registryDeps = new Set();

  const importBlocks =
    content.match(
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

async function updateRegistryFile(componentName, dependencies, registryDeps) {
  const registryFilePath = path.join(
    CONFIG.registryDir,
    `${componentName}.json`,
  );

  try {
    const registry = JSON.parse(fs.readFileSync(registryFilePath, "utf8"));

    // Extract dependencies from all files in the registry
    const allDependencies = new Set();
    const allRegistryDeps = new Set();

    // Process each file's content in the registry
    if (registry.files) {
      for (const file of registry.files) {
        if (file.content) {
          const { dependencies: fileDeps, registryDeps: fileRegistryDeps } =
            extractImports(file.content);

          fileDeps.forEach((dep) => allDependencies.add(dep));
          fileRegistryDeps.forEach((dep) => allRegistryDeps.add(dep));
        }
      }
    }

    // Update the registry with all found dependencies
    if (allDependencies.size > 0) {
      registry.dependencies = Array.from(allDependencies);
    } else {
      delete registry.dependencies;
    }

    if (allRegistryDeps.size > 0) {
      registry.registryDependencies = Array.from(allRegistryDeps);
    } else {
      delete registry.registryDependencies;
    }

    const formattedRegistry = await prettier.format(
      JSON.stringify(registry),
      CONFIG.prettier,
    );
    fs.writeFileSync(registryFilePath, formattedRegistry);

    return true;
  } catch (error) {
    return false;
  }
}

async function processComponent(file) {
  const content = fs.readFileSync(file, "utf8");
  const componentName = path.basename(file, path.extname(file));

  let scriptContent = content;
  if (file.endsWith(".vue")) {
    const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
    if (!scriptMatch) return null;
    scriptContent = scriptMatch[1];
  }

  const { dependencies, registryDeps } = extractImports(scriptContent);
  return updateRegistryFile(componentName, dependencies, registryDeps);
}

export async function checkImports() {
  try {
    console.log("🚀 Starting import check process...");

    if (!fs.existsSync(CONFIG.componentsDir)) {
      throw new Error(
        `Components directory does not exist: ${CONFIG.componentsDir}`,
      );
    }

    const pattern = path.join(CONFIG.componentsDir, "**/*.{vue,ts}");
    const files = await glob(pattern);

    console.log(`📊 Found ${files.length} files to process`);

    if (files.length === 0) {
      console.log("⚠️ No files found to process");
      return;
    }

    let updatedCount = 0;
    let errorCount = 0;
    let skippedCount = 0;

    for (const file of files) {
      const result = await processComponent(file);
      if (result === null) {
        skippedCount++;
      } else if (result) {
        updatedCount++;
      } else {
        errorCount++;
      }
    }

    console.log("\n📈 Final Results:");
    console.log(`- Total files processed: ${files.length}`);
    console.log(`- Successfully updated: ${updatedCount}`);
    console.log(`- Skipped: ${skippedCount}`);
    console.log(`- Errors: ${errorCount}`);

    if (errorCount > 0) {
      console.log("\n⚠️ Some files had errors during processing");
    }
  } catch (error) {
    console.error("❌ Fatal error during import check:", error);
    process.exit(1);
  }
}
