<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "@/registry/default/ui/card";

const cards = [
  {
    title: "Smart Analytics Dashboard",
    description:
      "Get real-time insights with customizable widgets and interactive data visualization tools.",
    class: "col-span-1 lg:col-span-2",
    img: "/img/long-jobs.webp",
  },
  {
    title: "Cross-Platform Integration",
    description:
      "Seamlessly connect with your favorite tools and services through our extensive API ecosystem.",
    class: "col-span-1 lg:col-span-2",
    img: "/img/multi-users.webp",
  },
  {
    title: "Advanced Security Suite",
    description:
      "Enterprise-grade security with end-to-end encryption and multi-factor authentication.",
    class: "col-span-1 lg:col-span-2",
    img: "/img/tasks-scheduler.webp",
  },
  {
    title: "Automated Workflow Builder",
    description:
      "Create custom workflows with drag-and-drop interface and no-code automation tools.",
    class: "col-span-1 lg:col-span-3",
    img: "/img/scenarios.webp",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage machine learning to predict trends and provide actionable business recommendations.",
    class: "col-span-1 lg:col-span-3",
    img: "/img/explore.webp",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
    <Card v-for="card in cards" :key="card.title" :class="cn('gap-2 p-2', card.class)">
      <div
        class="flex h-56 w-full items-center justify-center overflow-hidden rounded-md border bg-stone-900"
      >
        <img :src="card.img" alt="card image" class="h-auto w-auto object-cover" />
      </div>
      <CardHeader class="p-2">
        <CardTitle class="text-lg font-semibold">{{ card.title }}</CardTitle>
        <CardDescription class="text-sm/relaxed">
          {{ card.description }}
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>
