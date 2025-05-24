import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

interface RegistryFile {
  path: string;
  content: string;
  type: string;
  target: string;
}

interface RegistryItem {
  $schema: string;
  name: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
}

// List of known path aliases and internal imports to exclude from npm dependencies
const EXCLUDED_IMPORTS = new Set(["@", "vue"]);

// Map of package names to their actual npm package names
const DEPENDENCY_MAPPINGS: Record<string, string> = {
  "@remixicon": "@remixicon/vue",
};

async function main() {
  try {
    const registryItems = await getRegistryFiles();

    console.log(`\nTotal components found: ${registryItems.length}`);
    console.log("Registry updated successfully");

    // Write updated registry items back to files
    for (const item of registryItems) {
      const filePath = join(process.cwd(), "public", "r", `${item.name}.json`);
      await writeFile(filePath, JSON.stringify(item, null, 2));
    }
  } catch (error) {
    console.error("Error processing registry files:", error);
  }
}

async function getRegistryFiles(): Promise<RegistryItem[]> {
  const registryDir = join(process.cwd(), "public", "r");
  const files = await readdir(registryDir);
  const registryItems: RegistryItem[] = [];
  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = join(registryDir, file);
      const content = await readFile(filePath, "utf-8");
      const registryItem = JSON.parse(content) as RegistryItem;
      // Extract imports from all files
      const allImports = new Set<string>();
      const allRegistryDeps = new Set<string>();
      registryItem.files.forEach((file) => {
        if (file.content) {
          extractImports(file.content!).forEach((imp) => allImports.add(imp));
          extractRegistryDependencies(file.content!).forEach((dep) =>
            allRegistryDeps.add(dep),
          );
        }
      });
      // Update dependencies and registryDependencies
      registryItem.dependencies = Array.from(allImports);
      registryItem.registryDependencies = Array.from(allRegistryDeps);
      registryItems.push(registryItem);
    }
  }
  return registryItems;
}

function extractImports(content: string): string[] {
  const imports: string[] = [];
  // Match import statements
  const importRegex =
    /import\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (
      importPath &&
      !importPath.startsWith(".") &&
      !importPath.startsWith("/")
    ) {
      // Extract the package name (handle scoped packages)
      const packageName = importPath.split("/")[0];
      if (
        packageName &&
        !EXCLUDED_IMPORTS.has(packageName) &&
        !imports.includes(packageName)
      ) {
        // Use mapped dependency name if it exists, otherwise use original
        const mappedPackage = DEPENDENCY_MAPPINGS[packageName] || packageName;
        imports.push(mappedPackage);
      }
    }
  }
  return imports;
}

function extractRegistryDependencies(content: string): string[] {
  const registryDeps: Set<string> = new Set();
  const importRegex =
    /import\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  const pathMappings = {
    "@/registry/": (path: string) => path,
    "@/composables/": (path: string) => path.replace("/", "-"),
    "@/lib/": (path: string) => path.replace("/", "-"),
  };

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath) continue;

    for (const [prefix, transform] of Object.entries(pathMappings)) {
      if (importPath.startsWith(prefix)) {
        const path = importPath.replace(prefix, "");
        registryDeps.add(`https://originui-vue.com/r/${transform(path)}.json`);
        break;
      }
    }
  }
  return Array.from(registryDeps);
}

main();
