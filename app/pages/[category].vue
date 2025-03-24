<script setup lang="ts">
import { useRoute } from "vue-router";
import { categories } from "~/config/components";

const route = useRoute();
const categorySlug = route.params.category as string;

// Get category by slug
const getCategory = (slug: string) => {
  return categories.find((category) => category.slug === slug);
};

const category = getCategory(categorySlug);

// Handle 404 if category not found
if (!category) {
  throw createError({
    statusCode: 404,
    message: `Category '${categorySlug}' not found`,
  });
}

// Get components for this category
const components = getComponentsByNames(
  category.components.map((item) => item.name),
);

// Set page metadata
useHead({
  title: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  meta: [
    {
      name: "description",
      content: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
    },
  ],
});
</script>

<template>
  <div>
    <PageHeader :title="category.name">
      A growing collection of {{ components.length }}
      {{ category.name.toLowerCase() }} components built with Vue and Tailwind
      CSS.
    </PageHeader>

    <PageGrid>
      <ComponentCard
        v-for="component in components"
        :key="component.name"
        :component="component"
      >
        <ComponentLoader :component="component" />
        <ComponentDetails :component="component" />
      </ComponentCard>
    </PageGrid>

    <Cta />
  </div>
</template>
