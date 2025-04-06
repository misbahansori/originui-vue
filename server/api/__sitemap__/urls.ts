import type { SitemapUrlInput } from "#sitemap/types";
import { categories } from "~/config/components";

export default defineSitemapEventHandler(() => {
  return categories.map((category) => ({
    loc: `/${category.slug}`,
    _sitemap: "components",
  })) satisfies SitemapUrlInput[];
});
