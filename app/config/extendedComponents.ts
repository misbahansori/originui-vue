export interface ExtendedComponentCategory {
  slug: string;
  name: string;
  components: { name: string }[];
  isNew?: boolean;
}

export const extendedCategories: ExtendedComponentCategory[] = [
  {
    slug: "extended/auth",
    name: "Authentication",
    components: [{ name: "extended-01" }],
  },
];
