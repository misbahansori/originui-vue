import {
  updateRegistryImports,
  updateRegistryPaths,
} from "~~/scripts/update-registry.js";

console.log("=".repeat(80));
console.log("🔄 Starting Post-Build Process");
console.log("=".repeat(80));

await updateRegistryPaths();
await updateRegistryImports();

console.log("=".repeat(80));
console.log("✅ Post-Build Process Completed");
console.log("=".repeat(80));
