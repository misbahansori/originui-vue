<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref } from "vue";

const selectedColor = ref("blue");
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">Choose a color</legend>
    <RadioGroup class="flex gap-1.5" v-model="selectedColor">
      <RadioGroupItem
        value="blue"
        aria-label="Blue"
        class="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
      />
      <RadioGroupItem
        value="indigo"
        aria-label="Indigo"
        class="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
      />
      <RadioGroupItem
        value="pink"
        aria-label="Pink"
        class="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
      />
      <RadioGroupItem
        value="red"
        aria-label="red"
        class="size-6 border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
      />
      <RadioGroupItem
        value="orange"
        aria-label="orange"
        class="size-6 border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
      />
      <RadioGroupItem
        value="amber"
        aria-label="amber"
        class="size-6 border-amber-500 bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500"
      />
      <RadioGroupItem
        value="emerald"
        aria-label="emerald"
        class="size-6 border-emerald-500 bg-emerald-500 shadow-none data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
      />
    </RadioGroup>
  </fieldset>
</template>
