<script setup lang="ts">
import { extendedCategories } from "~/config/extendedComponents";

const sortedCategories = computed(() => {
  return [...extendedCategories].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
});

useSeoMeta({
  title: "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  description:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  ogTitle: "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  ogDescription:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  ogImage: "https://www.originui-vue.com/opengraph-image.webp",
  ogUrl: "https://www.originui-vue.com",
  twitterTitle: "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  twitterDescription:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  twitterImage: "https://www.originui-vue.com/opengraph-image.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div data-home>
    <PageHeader title="Extended Components">
      Extended components are components that are not part of the main library.
    </PageHeader>

    <div class="relative my-16">
      <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CategoryCard
          v-for="category in sortedCategories"
          :key="category.slug"
          :slug="category.slug"
          :name="category.name"
          :components-count="category.components.length"
          :is-new="category.isNew"
        />
      </div>
    </div>
  </div>
</template>
