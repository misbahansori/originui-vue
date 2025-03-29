import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";
import { categories } from "~/config/components";

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(() => {
  return categories.map((category) => ({
    loc: `/${category.slug}`,
    _sitemap: "components",
  })) satisfies SitemapUrlInput[];
});
