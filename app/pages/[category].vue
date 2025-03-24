<script setup lang="ts">
import { useRoute } from "vue-router";
import { categories } from "~/config/components";

const route = useRoute();
const categorySlug = route.params.category as string;

const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

const category = getCategory(categorySlug);

if (!category) {
  throw createError({
    statusCode: 404,
    message: `Category '${categorySlug}' not found`,
  });
}

const components = getComponentsByNames(
  category.components.map((item) => item.name),
);

// useHead({
//   title: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
//   meta: [
//     {
//       name: "description",
//       content: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
//     },
//   ],
// });
useSeoMeta({
  title: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  description: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
  ogTitle: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  ogDescription: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
  ogImage: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  ogUrl: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  twitterTitle: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  twitterDescription: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
  twitterImage: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  twitterCard: "summary_large_image",
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
        <component :is="component.name" />

        <ComponentDetails :component="component" />
      </ComponentCard>
    </PageGrid>

    <Cta />
  </div>
</template>
