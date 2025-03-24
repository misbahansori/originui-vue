<script setup lang="ts">
import type { RegistryItem } from "~/utils/component-utils";

interface Props {
  component: RegistryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex size-full min-h-[220px] items-center justify-center">
    <component :is="component.name" />
  </div>
</template>
