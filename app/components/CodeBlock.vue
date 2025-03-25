<script setup lang="ts">
import { codeToHtml } from "shiki";

const props = defineProps<{
  resolver: (() => Promise<string>) | undefined;
}>();

const html = ref("");

const code = await props.resolver?.();
html.value = await codeToHtml(code ?? "", {
  lang: "vue",
  theme: "github-dark",
});
</script>

<template></template>
