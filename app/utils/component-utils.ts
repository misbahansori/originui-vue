import { categories } from "~/config/components";
import { getAllComponents } from "./registry-utils";

export interface RegistryItem {
  name: string;
  type: "components";
  registryDependencies?: string[];
  component: any;
  files: string[];
  meta?: {
    colSpan?: 1 | 2 | 3;
    style?: 1 | 2 | 3;
    tags?: string[];
  };
}

// Mapping of components from registry and category list
const registry: Record<string, RegistryItem> = {};

// Populate the registry with components from registry.json and categories
export function populateRegistry() {
  // Clear existing registry
  Object.keys(registry).forEach((key) => {
    delete registry[key];
  });

  // First add from registry.json
  const registryComponents = getAllComponents();
  registryComponents.forEach((component) => {
    registry[component.name] = {
      name: component.name,
      type: "components",
      registryDependencies: component.dependencies,
      component: null, // This would be the actual component in a real implementation
      files: component.files.map((file) => file.path),
      meta: component.meta,
    };
  });

  // Then add from categories if not already in registry
  categories.forEach((category) => {
    category.components.forEach((comp) => {
      if (!registry[comp.name]) {
        registry[comp.name] = {
          name: comp.name,
          type: "components",
          component: null,
          files: [`components/${comp.name}.vue`],
        };
      }
    });
  });
}

// Initialize the registry
populateRegistry();

// Get all component names in the registry
export function getAllComponentNames(): string[] {
  return Object.keys(registry);
}

// Get a component by name
export function getComponentByName(name: string): RegistryItem | undefined {
  return registry[name];
}

// Get components by an array of names
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
