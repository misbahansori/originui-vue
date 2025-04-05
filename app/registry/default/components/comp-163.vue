<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { RiAppleLine, RiBankCardLine, RiPaypalLine } from "@remixicon/vue";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("1");
</script>

<template>
  <RadioGroup class="grid grid-cols-3 gap-2" v-model="selectedValue">
    <!-- Credit card -->
    <div
      class="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <RadioGroupItem :id="`${id}-1`" value="1" class="sr-only" />
      <RiBankCardLine class="opacity-60" size="20" aria-hidden="true" />
      <label
        :for="`${id}-1`"
        class="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
      >
        Card
      </label>
    </div>
    <!-- PayPal -->
    <div
      class="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <RadioGroupItem :id="`${id}-2`" value="2" class="sr-only" />
      <RiPaypalLine class="opacity-60" size="20" aria-hidden="true" />
      <label
        :for="`${id}-2`"
        class="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
      >
        PayPal
      </label>
    </div>
    <!-- Apple Pay -->
    <div
      class="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <RadioGroupItem :id="`${id}-3`" value="3" class="sr-only" />
      <RiAppleLine class="opacity-60" size="20" aria-hidden="true" />
      <label
        :for="`${id}-3`"
        class="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
      >
        Apple Pay
      </label>
    </div>
  </RadioGroup>
</template>
