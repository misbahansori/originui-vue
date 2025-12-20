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
      { name: "extended-38" },
    ],
  },
  {
    slug: "extended/contribution-graph",
    name: "Contribution Graph",
    components: [
      { name: "extended-39" },
      { name: "extended-40" },
      { name: "extended-41" },
      { name: "extended-42" },
      { name: "extended-43" },
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
      { name: "extended-28" },
      { name: "extended-29" },
      { name: "extended-30" },
      { name: "extended-31" },
      { name: "extended-32" },
      { name: "extended-33" },
      { name: "extended-34" },
    ],
  },
  {
    slug: "extended/snippet",
    name: "Snippet",
    components: [
      { name: "extended-35" },
      { name: "extended-36" },
      { name: "extended-37" },
    ],
  },
  {
    slug: "extended/mini-calendar",
    name: "Mini Calendar",
    components: [
      { name: "extended-44" },
      { name: "extended-45" },
      { name: "extended-46" },
      { name: "extended-47" },
      { name: "extended-48" },
      { name: "extended-49" },
      { name: "extended-50" },
      { name: "extended-51" },
      { name: "extended-52" },
      { name: "extended-53" },
      { name: "extended-54" },
    ],
  },
];
