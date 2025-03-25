<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Disabled input</Label>
    <Input :id="id" placeholder="Email" type="email" disabled />
  </div>
</template>
