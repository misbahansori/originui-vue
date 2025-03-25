<script setup lang="ts">
defineProps<{
  component: RegistryItem;
}>();
</script>
<template>
  <component :is="component.name" />
</template>
