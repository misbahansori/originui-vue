<script setup lang="ts">
import type { RegistryItem } from "shadcn-vue/registry";

const props = defineProps<{
  component: RegistryItem;
}>();

const component = await import(
  `~/registry/default/components/${props.component.name}.vue`
).then((res) => res.default);
</script>
<template>
  <component :is="component" />
</template>
