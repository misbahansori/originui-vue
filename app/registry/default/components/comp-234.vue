<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import type { Option } from "@/registry/default/ui/multi-select/MultiSelect.vue";
import MultiSelect from "@/registry/default/ui/multi-select/MultiSelect.vue";
import { ref } from "vue";

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
  <div class="*:not-first:mt-2">
    <Label>Multiselect</Label>
    <MultiSelect
      :options="options"
      v-model="values"
      v-model:query="query"
      hideClearAllButton
    />
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/examples/combobox-tags-input"
        target="_blank"
        rel="noopener nofollow"
      >
        Combobox with TagsInput
      </a>
    </p>
  </div>
</template>
