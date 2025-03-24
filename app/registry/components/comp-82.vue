<script setup lang="ts">
// Component using shadcn-vue button with destructive variant and icon
</script>

<template>
  <Button variant="destructive">
    <Icon
      name="lucide:trash"
      class="-ms-1 opacity-60"
      :size="16"
      aria-hidden="true"
    />
    Button
  </Button>
</template>
