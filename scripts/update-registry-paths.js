import fs from "fs";
import { glob } from "glob";
import prettier from "prettier";

const PATH_MAPPINGS = [
  {
    from: "app/registry/default/ui/",
    to: "ui/",
  },
  {
    from: "app/registry/default/components/",
    to: "components/",
  },
  {
    from: "registry/default/ui/",
    to: "ui/",
  },
  {
    from: "registry/default/components/",
    to: "components/",
  },
];

const PRETTIER_CONFIG = {
  parser: "json",
  printWidth: 60,
  htmlWhitespaceSensitivity: "ignore",
};

/**
 * Updates a single path based on defined mappings
 * @param {string} path - The path to update
 * @returns {{ newPath: string, wasUpdated: boolean }}
 */
function updatePath(path) {
  for (const mapping of PATH_MAPPINGS) {
    if (path.startsWith(mapping.from)) {
      return {
        newPath: path.replace(mapping.from, mapping.to),
        wasUpdated: true,
      };
    }
  }
  return { newPath: path, wasUpdated: false };
}

/**
 * Updates paths in a single registry file
 * @param {string} filePath - Path to the registry JSON file
 * @returns {Promise<{ fileName: string, updates: Array<{ index: number, from: string, to: string }> }>}
 */
async function processRegistryFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const updates = [];

  if (!Array.isArray(data.files)) {
    return { fileName: filePath, updates };
  }

  let fileWasUpdated = false;

  data.files.forEach((fileEntry, index) => {
    if (!fileEntry.path) return;

    const { newPath, wasUpdated } = updatePath(fileEntry.path);
    if (wasUpdated) {
      updates.push({
        index,
        from: fileEntry.path,
        to: newPath,
      });
      fileEntry.path = newPath;
      fileWasUpdated = true;
    }
  });

  if (fileWasUpdated) {
    const formattedJson = await prettier.format(
      JSON.stringify(data),
      PRETTIER_CONFIG,
    );
    fs.writeFileSync(filePath, formattedJson);
  }

  return { fileName: filePath, updates };
}

/**
 * Main function to update registry paths
 */
async function updateRegistryPaths() {
  try {
    const files = await glob("public/r/**/*.json");
    const results = await Promise.all(files.map(processRegistryFile));

    // Filter and format results
    const updatedFiles = results.filter((result) => result.updates.length > 0);
    const totalUpdates = updatedFiles.reduce(
      (sum, file) => sum + file.updates.length,
      0,
    );

    if (totalUpdates > 0) {
      console.log("\n📝 Path updates summary:");
      updatedFiles.forEach(({ fileName, updates }) => {
        console.log(`\n${fileName}:`);
        updates.forEach(({ index, from, to }) => {
          console.log(`  [${index}] ${from} → ${to}`);
        });
      });
      console.log(
        `\n✅ Updated ${totalUpdates} paths in ${updatedFiles.length} files`,
      );
    } else {
      console.log("✨ No paths needed updating");
    }
  } catch (error) {
    console.error("❌ Error updating registry paths:", error);
    process.exit(1);
  }
}

updateRegistryPaths().catch(console.error);
