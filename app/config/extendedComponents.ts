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
      { name: "extended-09" },
    ],
  },
  {
    slug: "extended/card",
    name: "Card",
    components: [
      { name: "extended-10" },
      { name: "extended-11" },
      { name: "extended-12" },
      // { name: "extended-13" },
      { name: "extended-14" },
      { name: "extended-15" },
      { name: "extended-16" },
      { name: "extended-17" },
      { name: "extended-18" },
      { name: "extended-19" },
    ],
  },
  {
    slug: "extended/statistic-card",
    name: "Statistic Card",
    components: [
      { name: "extended-20" },
      { name: "extended-21" },
      { name: "extended-22" },
      { name: "extended-23" },
      { name: "extended-24" },
      { name: "extended-25" },
      { name: "extended-26" },
      { name: "extended-27" },
    ],
    isNew: true,
  },
];
