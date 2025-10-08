import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { glob } from "glob";
import prettier from "prettier";

// Types
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

// Configuration
const EXCLUDED_IMPORTS = new Set([
  "@",
  "vue",
  "utils",
  "class-variance-authority",
]);

const PATH_MAPPINGS = [
  { from: "app/registry/default/ui/", to: "ui/" },
  { from: "app/registry/default/components/", to: "components/" },
  { from: "registry/default/ui/", to: "ui/" },
  { from: "registry/default/components/", to: "components/" },
] as const;

const PRETTIER_CONFIG = {
  parser: "json",
  printWidth: 60,
  htmlWhitespaceSensitivity: "ignore",
} satisfies prettier.Options;

// Main functions
export async function updateRegistryImports(): Promise<void> {
  try {
    const registryItems = await getRegistryFiles();
    console.log(`\nTotal components found: ${registryItems.length}`);

    for (const item of registryItems) {
      const filePath = join(process.cwd(), "public", "r", `${item.name}.json`);
      await writeFile(filePath, JSON.stringify(item, null, 2));
    }
    console.log("✅ Registry updated successfully");
  } catch (error) {
    console.error("❌ Error updating registry:", error);
  }
}

export async function updateRegistryPaths(): Promise<void> {
  try {
    const files = await glob("public/r/**/*.json");
    const updatedFiles = await Promise.all(files.map(updateFilePaths));
    const changedFiles = updatedFiles.filter((file) => file.updates.length > 0);

    if (changedFiles.length === 0) {
      console.log("✨ No paths needed updating");
      return;
    }

    console.log(`\n✅ Updated ${changedFiles.length} files`);
  } catch (error) {
    console.error("❌ Error updating paths:", error);
    process.exit(1);
  }
}

// Helper functions
async function getRegistryFiles(): Promise<RegistryItem[]> {
  const registryDir = join(process.cwd(), "public", "r");
  const files = await readdir(registryDir);
  const registryItems: RegistryItem[] = [];

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const filePath = join(registryDir, file);
    const content = await readFile(filePath, "utf-8");
    const item = JSON.parse(content) as RegistryItem;

    // Extract dependencies from all files
    const dependencies = new Set<string>();
    const registryDeps = new Set<string>();

    if (!Array.isArray(item.files)) {
      continue;
    }

    for (const file of item.files) {
      if (!file.content) continue;

      // Add npm dependencies
      for (const dep of extractDependencies(file.content)) {
        dependencies.add(dep);
      }

      // Add registry dependencies
      for (const dep of extractRegistryDependencies(file.content)) {
        registryDeps.add(dep);
      }
    }

    item.dependencies = Array.from(dependencies);
    item.registryDependencies = Array.from(registryDeps);
    registryItems.push(item);
  }

  return registryItems;
}

async function updateFilePaths(
  filePath: string,
): Promise<{ updates: { from: string; to: string }[] }> {
  const content = await readFile(filePath, "utf8");
  const data = JSON.parse(content) as RegistryItem;
  const updates: { from: string; to: string }[] = [];

  if (!Array.isArray(data.files)) {
    return { updates };
  }

  let hasChanges = false;

  for (const file of data.files) {
    if (!file.path) continue;

    const newPath = updatePath(file.path);
    if (newPath !== file.path) {
      updates.push({ from: file.path, to: newPath });
      file.path = newPath;
      hasChanges = true;
    }
  }

  if (hasChanges) {
    const formattedJson = await prettier.format(
      JSON.stringify(data),
      PRETTIER_CONFIG,
    );
    await writeFile(filePath, formattedJson);
  }

  return { updates };
}

function updatePath(path: string): string {
  for (const { from, to } of PATH_MAPPINGS) {
    if (path.startsWith(from)) {
      return path.replace(from, to);
    }
  }
  return path;
}

function extractDependencies(content: string): string[] {
  const imports = new Set<string>();
  const importRegex =
    /import\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;

  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    // Skip relative paths (local project imports) and absolute paths
    if (
      !importPath ||
      importPath.startsWith(".") ||
      importPath.startsWith("/") ||
      importPath.startsWith("@/")
    ) {
      continue;
    }

    if (importPath && !EXCLUDED_IMPORTS.has(importPath)) {
      imports.add(importPath);
    }
  }

  return Array.from(imports);
}

function extractRegistryDependencies(content: string): string[] {
  const deps = new Set<string>();
  const importRegex =
    /import\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;

  let match;

  const pathMappings = {
    "@/registry/": (path: string) => {
      // Skip paths that start with default/components
      if (path.startsWith("default/components/")) {
        return null;
      }
      return path.replace("default/ui/", "");
    },
    "@/composables/": (path: string) => path.replace("/", "-"),
    "@/lib/": (path: string) => path.replace("/", "-"),
  } as const;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath || importPath.includes("utils")) continue;

    for (const [prefix, transform] of Object.entries(pathMappings)) {
      if (importPath.startsWith(prefix)) {
        const path = importPath.replace(prefix, "");
        const transformedPath = transform(path);
        if (transformedPath) {
          deps.add(`https://originui-vue.com/r/${transformedPath}.json`);
        }
        break;
      }
    }
  }

  return Array.from(deps);
}
