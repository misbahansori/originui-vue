<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { RiAppleLine, RiBankCardLine, RiPaypalLine } from "@remixicon/vue";
import { ref } from "vue";

const selectedValue = ref("1");
</script>

<template>
  <RadioGroup class="grid grid-cols-3 gap-2" v-model="selectedValue">
    <!-- Credit card -->
    <div
      class="border-input has-data-[state=checked]:border-primary/50 focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <RadioGroupItem value="1" class="sr-only" />
      <RiBankCardLine class="opacity-60" size="20" aria-hidden="true" />
      <label
        class="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
      >
        Card
      </label>
    </div>
    <!-- PayPal -->
    <div
      class="border-input has-data-[state=checked]:border-primary/50 focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <RadioGroupItem value="2" class="sr-only" />
      <RiPaypalLine class="opacity-60" size="20" aria-hidden="true" />
      <label
        class="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
      >
        PayPal
      </label>
    </div>
    <!-- Apple Pay -->
    <div
      class="border-input has-data-[state=checked]:border-primary/50 focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <RadioGroupItem value="3" class="sr-only" />
      <RiAppleLine class="opacity-60" size="20" aria-hidden="true" />
      <label
        class="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
      >
        Apple Pay
      </label>
    </div>
  </RadioGroup>
</template>
