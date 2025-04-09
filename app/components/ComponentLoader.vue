<script setup lang="ts">
import { LucideLoader } from "lucide-vue-next";
import type { RegistryItem } from "shadcn-vue/registry";
defineProps<{
  component: RegistryItem;
}>();
</script>
<template>
  <Suspense>
    <template #default>
      <component :is="component.name" />
    </template>
    <template #fallback>
      <div class="flex items-center justify-center p-4">
        <LucideLoader class="mx-auto size-4 animate-spin" />
      </div>
    </template>
  </Suspense>
</template>
