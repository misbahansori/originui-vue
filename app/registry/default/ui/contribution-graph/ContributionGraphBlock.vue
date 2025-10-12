<script setup lang="ts">
defineProps<{
  activity?: any;
  dayIndex?: number;
  weekIndex?: number;
}>();
</script>

<template>
  <div data-slot="contribution-graph-block">
    <!-- Block implementation -->
  </div>
</template>
