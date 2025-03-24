export interface Category {
  name: string;
  slug: string;
  components: { name: string; slug: string }[];
  isNew?: boolean;
}

export const categories: Category[] = [
  {
    name: "Accordion",
    slug: "accordion",
    components: [{ name: "Accordion", slug: "accordion" }],
  },
  {
    name: "Alert",
    slug: "alert",
    components: [{ name: "Alert", slug: "alert" }],
  },
  {
    name: "Alert Dialog",
    slug: "alert-dialog",
    components: [{ name: "Alert Dialog", slug: "alert-dialog" }],
  },
  {
    name: "Badge",
    slug: "badge",
    components: [{ name: "Badge", slug: "badge" }],
  },
  {
    name: "Button",
    slug: "button",
    components: [{ name: "Button", slug: "button" }],
  },
  {
    name: "Card",
    slug: "card",
    components: [{ name: "Card", slug: "card" }],
  },
  {
    name: "Dialog",
    slug: "dialog",
    components: [{ name: "Dialog", slug: "dialog" }],
  },
  {
    name: "Form",
    slug: "form",
    components: [{ name: "Form", slug: "form" }],
    isNew: true,
  },
];
