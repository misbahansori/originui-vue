<script setup lang="ts">
const id = useId();
const checked = ref<boolean | "indeterminate">("indeterminate");
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id">Indeterminate checkbox</Label>
  </div>
</template>
