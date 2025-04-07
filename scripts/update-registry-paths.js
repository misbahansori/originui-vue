import fs from "fs";
import { glob } from "glob";
import prettier from "prettier";

async function updateRegistryPaths() {
  try {
    // Find all JSON files in public/r directory
    const files = await glob("public/r/**/*.json");
    let totalUpdates = 0;

    for (const file of files) {
      console.log(`Processing ${file}...`);

      // Read and parse the JSON file
      const content = fs.readFileSync(file, "utf8");
      const data = JSON.parse(content);
      let fileWasUpdated = false;

      // Check if the file has a files array
      if (Array.isArray(data.files)) {
        data.files.forEach((fileEntry, index) => {
          if (fileEntry.path) {
            const oldPath = fileEntry.path;

            // Update path based on the pattern
            if (oldPath.startsWith("app/registry/default/ui/")) {
              fileEntry.path = oldPath.replace(
                "app/registry/default/ui/",
                "ui/",
              );
              fileWasUpdated = true;
            } else if (oldPath.startsWith("app/registry/default/components/")) {
              fileEntry.path = oldPath.replace(
                "app/registry/default/components/",
                "components/",
              );
              fileWasUpdated = true;
            } else if (oldPath.startsWith("registry/default/ui/")) {
              fileEntry.path = oldPath.replace("registry/default/ui/", "ui/");
              fileWasUpdated = true;
            } else if (oldPath.startsWith("registry/default/components/")) {
              fileEntry.path = oldPath.replace(
                "registry/default/components/",
                "components/",
              );
              fileWasUpdated = true;
            }

            if (oldPath !== fileEntry.path) {
              console.log(`  [${index}] Updated path from: ${oldPath}`);
              console.log(`  [${index}] Updated path to:   ${fileEntry.path}`);
              totalUpdates++;
            }
          }
        });

        // Only write if any paths were actually changed
        if (fileWasUpdated) {
          // Format and write the updated JSON
          const formattedJson = await prettier.format(JSON.stringify(data), {
            parser: "json",
            printWidth: 60,
            htmlWhitespaceSensitivity: "ignore",
          });

          fs.writeFileSync(file, formattedJson);
        }
      } else {
        console.log(`  No files array found in ${file}`);
      }
    }

    console.log(
      `\n✅ Registry paths update completed! Updated ${totalUpdates} paths.`,
    );
  } catch (error) {
    console.error("Error updating registry paths:", error);
  }
}

updateRegistryPaths().catch(console.error);
