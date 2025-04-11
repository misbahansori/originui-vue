import fs from "fs";
import { glob } from "glob";
import prettier from "prettier";

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
};

function updatePath(path) {
  for (const { from, to } of PATH_MAPPINGS) {
    if (path.startsWith(from)) {
      return { newPath: path.replace(from, to), wasUpdated: true };
    }
  }
  return { newPath: path, wasUpdated: false };
}

async function processRegistryFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const updates = [];

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
    fs.writeFileSync(filePath, formattedJson);
  }

  return { fileName: filePath, updates };
}

function logResults(updatedFiles) {
  const totalUpdates = updatedFiles.reduce(
    (sum, file) => sum + file.updates.length,
    0,
  );

  if (totalUpdates === 0) {
    console.log("✨ No paths needed updating");
    return;
  }

  console.log("\n📝 Path updates summary:");
  for (const { fileName, updates } of updatedFiles) {
    console.log(`\n${fileName}:`);
    for (const { index, from, to } of updates) {
      console.log(`  [${index}] ${from} → ${to}`);
    }
  }
  console.log(
    `\n✅ Updated ${totalUpdates} paths in ${updatedFiles.length} files`,
  );
}

async function updateRegistryPaths() {
  try {
    const files = await glob("public/r/**/*.json");
    const results = await Promise.all(files.map(processRegistryFile));
    const updatedFiles = results.filter((result) => result.updates.length > 0);

    logResults(updatedFiles);
  } catch (error) {
    console.error("❌ Error updating registry paths:", error);
    process.exit(1);
  }
}

updateRegistryPaths();
