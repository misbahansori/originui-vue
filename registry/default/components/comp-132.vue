<script setup lang="ts">
const id = useId();
const checked = ref(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id">Simple checkbox</Label>
  </div>
</template>
