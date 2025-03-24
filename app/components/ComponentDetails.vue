<script setup lang="ts">
import type { RegistryItem } from "~/utils/component-utils";

interface Props {
  component: RegistryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="bg-background border-t p-4">
    <div class="flex items-center justify-between">
      <h3 class="font-medium">{{ props.component.name }}</h3>
    </div>
  </div>
</template>
