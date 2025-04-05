<script setup lang="ts">
const id = useId();
const checked = ref(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id">
      I agree to the
      <a class="underline" href="https://originui.com" target="_blank">
        terms of service
      </a>
    </Label>
  </div>
</template>
