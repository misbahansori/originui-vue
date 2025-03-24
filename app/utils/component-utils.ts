import { categories } from "~/config/components";

export interface RegistryItem {
  name: string;
  type: "components";
  registryDependencies?: string[];
  component: any;
  files: string[];
}

// Mock registry for demo purposes - this would be replaced with actual components
const registry: Record<string, RegistryItem> = {};

// Populate the registry with demo items
categories.forEach((category) => {
  category.components.forEach((comp) => {
    registry[comp.name] = {
      name: comp.name,
      type: "components",
      component: null, // This would be the actual component in a real implementation
      files: [`components/${comp.name}.vue`],
    };
  });
});

export function getComponentsByNames(names: string[]): RegistryItem[] {
  return names.map((name) => {
    // Create a placeholder component if it doesn't exist in registry
    if (!registry[name]) {
      return {
        name,
        type: "components",
        component: null,
        files: [],
      };
    }
    return registry[name];
  });
}
