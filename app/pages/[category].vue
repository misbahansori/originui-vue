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

useSeoMeta({
  title: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  description: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
  ogTitle: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  ogDescription: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Vue and Tailwind CSS.`,
  ogImage: "https://originui-vue.com/opengraph-image.jpg",
  ogUrl: "https://originui-vue.com",
  twitterTitle: `${category.name} components built with Vue and Tailwind CSS - Origin UI`,
  twitterDescription:
    "An open-source collection of copy-and-paste components for quickly building application UIs.",
  twitterImage: "https://originui-vue.com/opengraph-image.jpg",
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
        <ComponentLoader :component="component" />

        <ComponentDetails :component="component" />
      </ComponentCard>
    </PageGrid>

    <Cta />
  </div>
</template>
