<script setup lang="ts">
const id = useId();
const checkedItems = ref({
  "1": false,
  "2": false,
  "3": false,
});
</script>

<template>
  <div class="grid gap-3">
    <div class="flex items-center gap-2">
      <Checkbox :id="`${id}-1`" v-model="checkedItems['1']" />
      <Label :for="`${id}-1`">Vue</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox :id="`${id}-2`" v-model="checkedItems['2']" />
      <Label :for="`${id}-2`">Nuxt</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox :id="`${id}-3`" v-model="checkedItems['3']" />
      <Label :for="`${id}-3`">Astro</Label>
    </div>
  </div>
</template>
