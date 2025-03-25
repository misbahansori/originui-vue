<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Simple input</Label>
    <Input :id="id" placeholder="Email" type="email" />
  </div>
</template>
