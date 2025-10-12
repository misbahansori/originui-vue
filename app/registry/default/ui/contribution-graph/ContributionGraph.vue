<script setup lang="ts">
defineProps<{
  data?: any;
}>();
</script>

<template>
  <div data-slot="contribution-graph">
    <slot />
  </div>
</template>
