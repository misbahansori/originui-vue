import { updateRegistryPaths } from "./update-registry-paths.js";
import { checkImports } from "./check-imports.js";

console.log("=".repeat(80));
console.log("🔄 Starting Post-Build Process");
console.log("=".repeat(80));

// Run the processes sequentially
await checkImports();
await updateRegistryPaths();

console.log("=".repeat(80));
console.log("✅ Post-Build Process Completed");
console.log("=".repeat(80));
