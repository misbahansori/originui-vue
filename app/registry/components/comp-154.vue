<script setup lang="ts">
const id = useId();
const selectedValue = ref("2");
</script>

<template>
  <RadioGroup v-model="selectedValue" disabled>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="1" :id="`${id}-1`" />
      <Label :for="`${id}-1`">Option 1</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="2" :id="`${id}-2`" />
      <Label :for="`${id}-2`">Option 2</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="3" :id="`${id}-3`" />
      <Label :for="`${id}-3`">Option 3</Label>
    </div>
  </RadioGroup>
</template>
