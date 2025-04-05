<script setup lang="ts">
const id = useId();
const selectedValue = ref("1");

const items = [
  { value: "1", label: "USA" },
  { value: "2", label: "UK" },
  { value: "3", label: "France" },
];
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Server location
    </legend>
    <RadioGroup class="flex flex-wrap gap-2" v-model="selectedValue">
      <div
        v-for="item in items"
        :key="`${id}-${item.value}`"
        class="border-input has-data-[state=checked]:border-ring relative flex flex-col items-start gap-4 rounded-md border p-3 shadow-xs outline-none"
      >
        <div class="flex items-center gap-2">
          <RadioGroupItem
            :id="`${id}-${item.value}`"
            :value="item.value"
            class="after:absolute after:inset-0"
          />
          <Label :for="`${id}-${item.value}`">{{ item.label }}</Label>
        </div>
      </div>
    </RadioGroup>
  </fieldset>
</template>
