<script setup lang="ts">
const cards = [
  {
    id: 5,
    title: "Candlestick Chart",
    demoUrl: "https://crafted.is/exp5",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-05",
    imgHeight: 770,
  },
  {
    id: 4,
    title: "Crypto Wallet",
    demoUrl: "https://crafted.is/exp4",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-04",
    imgHeight: 894,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    demoUrl: "https://crafted.is/exp3",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-03",
    imgHeight: 829,
  },
  {
    id: 2,
    title: "AI Chat",
    demoUrl: "https://crafted.is/exp2",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-02",
    imgHeight: 700,
  },
  {
    id: 1,
    title: "Dark Table",
    demoUrl: "https://crafted.is/exp1",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-01",
    imgHeight: 894,
  },
];

useSeoMeta({
  title: "UI Layouts built with Tailwind CSS and Vue - Origin UI",
  description:
    "Beautiful UI layouts built with Tailwind CSS and Vue to help you get started with your next project.",
  ogTitle: "UI Layouts built with Tailwind CSS and Vue - Origin UI",
  ogDescription:
    "Beautiful UI layouts built with Tailwind CSS and Vue to help you get started with your next project.",
  ogImage: "https://originui-vue.com/opengraph-image.webp",
  ogUrl: "https://originui-vue.com/layouts",
  twitterTitle: "UI Layouts built with Tailwind CSS and Vue - Origin UI",
  twitterDescription:
    "Beautiful UI layouts built with Tailwind CSS and Vue to help you get started with your next project.",
  twitterImage: "https://originui-vue.com/opengraph-image.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <PageHeader title="Layouts &amp; Experiments">
      Beautifully designed open-source layouts and UI experiments built with
      Origin UI and shadcn/ui.
    </PageHeader>

    <!-- Cards -->
    <div class="space-y-16">
      <LayoutsCard v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>
