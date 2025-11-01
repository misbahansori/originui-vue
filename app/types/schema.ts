// https://shadcn-vue.com/schema/registry-item.json
export interface RegistryItem {
  name: string;
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:theme"
    | "registry:page"
    | "registry:file"
    | "registry:style";
  description?: string;
  title?: string;
  author?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files?: {
    path?: string;
    content?: string;
    type?:
      | "registry:lib"
      | "registry:block"
      | "registry:component"
      | "registry:ui"
      | "registry:hook"
      | "registry:theme"
      | "registry:page"
      | "registry:file";
    target?: string;
  }[];
  meta?: {
    tags?: string[];
    colSpan?: number;
    style?: number;
  };
  docs?: string;
  categories?: string[];
  extends?: string;
}
