<script setup lang="ts">
import type { Option } from "@/registry/default/ui/multi-select/MultiSelect.vue";
import MultiSelect from "@/registry/default/ui/multi-select/MultiSelect.vue";
import { useFilter } from "reka-ui";
import { ref } from "vue";

const { contains } = useFilter({ sensitivity: "base" });

const query = ref("");
const values = ref<Option[]>([
  {
    value: "Apple",
    label: "Apple",
  },
]);

const options = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    disabled: true,
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
    disabled: true,
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];
</script>

<template>
  <MultiSelect :options="options" v-model="values" :query="query" />
</template>
