<script setup lang="ts">
// Calendar component with render prop pattern
</script>

<template>
  <div data-slot="contribution-graph-calendar">
    <slot :activity="null" :day-index="0" :week-index="0" />
  </div>
</template>
