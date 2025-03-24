<script setup lang="ts">
import type { RegistryItem } from "~/utils/component-utils";

interface Props {
  component: RegistryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex size-full min-h-[220px] items-center justify-center">
    <div class="text-muted-foreground">
      <component :is="component.name" />
    </div>
  </div>
</template>
