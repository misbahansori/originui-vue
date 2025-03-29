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

export interface RegistryItem {
  name: string;
  type: string;
  description: string;
  registryDependencies?: string[];
  files: ComponentFile[];
  tailwind?: TailwindConfig;
  meta?: {
    colSpan?: 1 | 2 | 3;
    style?: 1 | 2 | 3;
    tags?: RegistryTag[];
  };
}

const components = registry.items as unknown as RegistryItem[];

// Get components by an array of names
export function getComponentsByNames(names: string[]): RegistryItem[] {
  const componentsMap = new Map(components.map((comp) => [comp.name, comp]));

  return names
    .map((name) => componentsMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined);
}

export const getAvailableTags = (
  selectedTags: RegistryTag[],
): RegistryTag[] => {
  if (!selectedTags.length) return [];

  // Get all components that have all the selected tags
  const matchingComponents = components.filter((component) =>
    selectedTags.every((tag) => component.meta?.tags?.includes(tag) ?? false),
  );

  // Get all unique tags from the matching components
  const availableTags = new Set<RegistryTag>();
  matchingComponents.forEach((component) => {
    component.meta?.tags?.forEach((tag: RegistryTag) => {
      if (!selectedTags.includes(tag)) {
        availableTags.add(tag);
      }
    });
  });

  return Array.from(availableTags);
};

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/compositions/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib");
};
