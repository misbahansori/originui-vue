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
    components: [
      { name: "extended-01" },
      { name: "extended-02" },
      { name: "extended-03" },
      { name: "extended-04" },
      { name: "extended-05" },
    ],
  },
  {
    slug: "extended/empty-state",
    name: "Empty State",
    components: [
      { name: "extended-06" },
      { name: "extended-07" },
      { name: "extended-08" },
    ],
  },
];
