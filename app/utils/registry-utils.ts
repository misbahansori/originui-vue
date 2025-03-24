import type { RegistryTag } from "~/config/registry-tags";
import registry from "../registry.json";

// Define registry interfaces
export interface ComponentFile {
  name: string;
  type: string;
  path: string;
}

export interface TailwindConfig {
  prefix?: string;
  keyframes?: Record<string, Record<string, string>>;
  animations?: Record<string, string>;
  extend?: any;
}

export interface ComponentInfo {
  name: string;
  type: string;
  description: string;
  dependencies?: string[];
  files: ComponentFile[];
  tailwind?: TailwindConfig;
  meta?: {
    colSpan?: 1 | 2 | 3;
    style?: 1 | 2 | 3;
    tags?: RegistryTag[];
  };
}

export interface Registry {
  $schema?: string;
  name: string;
  homepage?: string;
  items: ComponentInfo[];
}

// Export the registry interface for access in other files
export function getRegistry(): Registry {
  return registry as Registry;
}

// Get a component by name
export function getComponentByName(name: string): ComponentInfo | undefined {
  return (registry as Registry).items.find(
    (item: ComponentInfo) => item.name === name,
  );
}

// Get component names
export function getAllComponentNames(): string[] {
  return (registry as Registry).items.map((item: ComponentInfo) => item.name);
}

// Get all components from the registry
export function getAllComponents(): ComponentInfo[] {
  return (registry as Registry).items;
}

// Get components by an array of names
export function getComponentsByNames(names: string[]): ComponentInfo[] {
  return names
    .map((name) => getComponentByName(name))
    .filter((comp): comp is ComponentInfo => comp !== undefined);
}

/**
 * Filter components by tags
 */
export function filterComponentsByTags(
  selectedTags: RegistryTag[] = [],
): ComponentInfo[] {
  if (!selectedTags.length) {
    return (registry as Registry).items;
  }

  return (registry as Registry).items.filter((component: ComponentInfo) =>
    selectedTags.every((tag) => component.meta?.tags?.includes(tag) ?? false),
  );
}

/**
 * Get available tags based on selected tags
 */
export function getAvailableTags(selectedTags: RegistryTag[]): RegistryTag[] {
  if (!selectedTags.length) return [];

  // Get all components that have all the selected tags
  const matchingComponents = (registry as Registry).items.filter(
    (component: ComponentInfo) =>
      selectedTags.every((tag) => component.meta?.tags?.includes(tag) ?? false),
  );

  // Get all unique tags from the matching components
  const availableTags = new Set<RegistryTag>();
  matchingComponents.forEach((component: ComponentInfo) => {
    component.meta?.tags?.forEach((tag: RegistryTag) => {
      if (!selectedTags.includes(tag)) {
        availableTags.add(tag);
      }
    });
  });

  return Array.from(availableTags);
}

/**
 * Convert registry paths to actual paths
 */
export function convertRegistryPaths(content: string): string {
  return content
    .replace(/~\/registry\/ui/g, "~/components/ui")
    .replace(/~\/registry\/compositions/g, "~/components")
    .replace(/~\/registry\/hooks/g, "~/composables")
    .replace(/~\/registry\/lib/g, "~/utils");
}
