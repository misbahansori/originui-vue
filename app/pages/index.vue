<script setup lang="ts">
import { categories } from "~/config/components";

const sortedCategories = computed(() => {
  return [...categories].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
});

useSeoMeta({
  title: "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  description:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  ogTitle:
    "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  ogDescription:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  ogImage: "https://originui-vue.com/opengraph-image.webp",
  ogUrl: "https://originui-vue.com",
  twitterTitle:
    "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  twitterDescription:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  twitterImage: "https://originui-vue.com/opengraph-image.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div data-home>
    <div class="max-w-3xl max-sm:text-center">
      <h1
        class="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]"
      >
        Beautiful UI components built with Tailwind CSS and
        <span class="text-[#41B883]">Vue</span>
      </h1>
      <p class="text-muted-foreground mb-8 text-lg">
        An open-source collection of copy-and-paste components for quickly build
        application UIs.
      </p>
      <SearchButton />
    </div>

    <div class="relative my-16">
      <div
        class="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
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

    <SubscribeBottom />
  </div>
</template>
