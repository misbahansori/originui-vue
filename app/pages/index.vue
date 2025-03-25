<script setup lang="ts">
import { categories } from "~/config/components";

const sortedCategories = computed(() => {
  return [...categories].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
});
</script>

<template>
  <div data-home>
    <div class="mb-8 w-full border-l-4 border-yellow-500 bg-yellow-100 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <Icon name="lucide:alert-triangle" class="h-5 w-5 text-yellow-500" />
        </div>
        <div class="ml-3">
          <p class="text-sm text-yellow-700">
            <strong>Work in Progress:</strong>
            This project is still under development. Contributions are greatly
            appreciated!
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-3xl max-sm:text-center">
      <h1
        class="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]"
      >
        Beautiful UI components built with Tailwind CSS and
        <span class="text-[#41B883]">Vue</span>
      </h1>
      <p class="text-muted-foreground mb-8 text-lg">
        An open-source collection of copy-and-paste components for quickly
        building application UIs.
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
