<script setup lang="ts">
defineProps<{ component: RegistryItem }>();
</script>

<template>
  <div class="flex size-full min-h-[220px] items-center justify-center">
    <component :is="component.name" />
  </div>
</template>
