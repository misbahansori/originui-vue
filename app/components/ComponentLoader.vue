<script setup lang="ts">
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
        <Icon name="lucide:loader" class="mx-auto animate-spin" />
      </div>
    </template>
  </Suspense>
</template>
