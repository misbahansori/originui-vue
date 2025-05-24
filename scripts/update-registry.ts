import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { glob } from "glob";
import prettier from "prettier";

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

interface PathUpdate {
  index: number;
  from: string;
  to: string;
}

interface FileUpdate {
  fileName: string;
  updates: PathUpdate[];
}

// List of known path aliases and internal imports to exclude from npm dependencies
const EXCLUDED_IMPORTS = new Set([
  "@",
  "vue",
  "utils",
  "class-variance-authority",
]);

// Map of package names to their actual npm package names
const DEPENDENCY_MAPPINGS: Record<string, string> = {
  "@remixicon": "@remixicon/vue",
};

// Map of paths to their new paths
const PATH_MAPPINGS = [
  { from: "app/registry/default/ui/", to: "ui/" },
  { from: "app/registry/default/components/", to: "components/" },
  { from: "registry/default/ui/", to: "ui/" },
  { from: "registry/default/components/", to: "components/" },
];

const PRETTIER_CONFIG = {
  parser: "json",
  printWidth: 60,
  htmlWhitespaceSensitivity: "ignore",
} satisfies prettier.Options;

export async function updateRegistryImports(): Promise<void> {
  try {
    const registryItems = await getRegistryFiles();
    console.log(`\nTotal components found: ${registryItems.length}`);
    console.log("Registry updated successfully");

    for (const item of registryItems) {
      const filePath = join(process.cwd(), "public", "r", `${item.name}.json`);
      await writeFile(filePath, JSON.stringify(item, null, 2));
    }
  } catch (error) {
    console.error("Error processing registry files:", error);
  }
}

export async function updateRegistryPaths(): Promise<void> {
  try {
    const files = await glob("public/r/**/*.json");
    const results = await Promise.all(files.map(processRegistryFile));
    const updatedFiles = results.filter((result) => result.updates.length > 0);

    console.log(
      `\n✅ Updated ${updatedFiles.length} paths in ${updatedFiles.length} files`,
    );
  } catch (error) {
    console.error("❌ Error updating registry paths:", error);
    process.exit(1);
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
      registryItem.dependencies = Array.from(allImports);
      registryItem.registryDependencies = Array.from(allRegistryDeps);
      registryItems.push(registryItem);
    }
  }
  return registryItems;
}

async function processRegistryFile(filePath: string): Promise<FileUpdate> {
  const content = await readFile(filePath, "utf8");
  const data = JSON.parse(content) as RegistryItem;
  const updates: PathUpdate[] = [];

  if (!Array.isArray(data.files)) {
    return { fileName: filePath, updates };
  }

  let fileWasUpdated = false;

  for (const [index, fileEntry] of data.files.entries()) {
    if (!fileEntry.path) continue;

    const { newPath, wasUpdated } = updatePath(fileEntry.path);
    if (wasUpdated) {
      updates.push({ index, from: fileEntry.path, to: newPath });
      fileEntry.path = newPath;
      fileWasUpdated = true;
    }
  }

  if (fileWasUpdated) {
    const formattedJson = await prettier.format(
      JSON.stringify(data),
      PRETTIER_CONFIG,
    );
    await writeFile(filePath, formattedJson);
  }

  return { fileName: filePath, updates };
}

// Utility functions
function updatePath(path: string): { newPath: string; wasUpdated: boolean } {
  for (const { from, to } of PATH_MAPPINGS) {
    if (path.startsWith(from)) {
      return { newPath: path.replace(from, to), wasUpdated: true };
    }
  }
  return { newPath: path, wasUpdated: false };
}

function extractImports(content: string): string[] {
  const imports: string[] = [];
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
      const packageName = importPath.split("/")[0];
      if (
        packageName &&
        !EXCLUDED_IMPORTS.has(packageName) &&
        !imports.includes(packageName)
      ) {
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
    "@/registry/": (path: string) => path.replace("default/ui/", ""),
    "@/composables/": (path: string) => path.replace("/", "-"),
    "@/lib/": (path: string) => path.replace("/", "-"),
  };

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath || importPath.includes("utils")) continue;

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
