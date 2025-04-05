<script setup lang="ts">
interface Option {
  value: string;
  label: string;
  disable?: boolean;
}

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

const value = ref([]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Multiselect with placeholder and clear</Label>
    <MultipleSelector
      :command-props="{
        label: 'Select frameworks',
      }"
      v-model="value"
      :default-options="frameworks"
      placeholder="Select frameworks"
      :empty-indicator="true"
    >
      <template #empty-indicator>
        <p class="text-center text-sm">No results found</p>
      </template>
    </MultipleSelector>
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
