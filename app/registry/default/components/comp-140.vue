<script setup lang="ts">
const id = useId();
const checked = ref(false);
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <Checkbox :id="id" class="order-1" v-model="checked" />
    <Label :for="id">Right aligned checkbox</Label>
  </div>
</template>
