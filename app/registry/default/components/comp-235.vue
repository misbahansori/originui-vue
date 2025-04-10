<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import type { Option } from "@/registry/default/ui/multi-select/MultiSelect.vue";
import MultiSelect from "@/registry/default/ui/multi-select/MultiSelect.vue";
import { ref } from "vue";

const query = ref("");
const value = ref<Option[]>([]);

const frameworks: Option[] = [
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
  <div class="*:not-first:mt-2">
    <Label>Multiselect with placeholder and clear</Label>
    <MultiSelect :options="frameworks" v-model="value" v-model:query="query" />

    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Inspired by
      <a
        class="hover:text-foreground underline"
        href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector"
        target="_blank"
        rel="noopener nofollow"
      >
        shadcn/ui expansions
      </a>
    </p>
  </div>
</template>
