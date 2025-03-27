<script setup lang="ts">
useSeoMeta({
  title: "Search a Origin UI component",
  description: "Search for components in the Origin UI library.",
  ogTitle: "Search a Origin UI component",
  ogDescription: "Search for components in the Origin UI library.",
  ogUrl: "https://originui-vue.com/search",
  twitterTitle: "Search a Origin UI component",
  twitterDescription: "Search for components in the Origin UI library.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <PageHeader title="Search Origin UI" class="mb-10">
      Use this page to quickly find a component (e.g., multiselect, vertical
      slider, etc.)
    </PageHeader>
    <Suspense>
      <ComponentsContainer />
    </Suspense>
  </div>
</template>
