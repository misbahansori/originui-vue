<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with button</Label>
    <div class="flex gap-2">
      <Input :id="id" class="flex-1" placeholder="Email" type="email" />
      <Button variant="outline">Send</Button>
    </div>
  </div>
</template>
