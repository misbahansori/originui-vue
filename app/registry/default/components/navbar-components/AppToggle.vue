<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("on");
</script>

<template>
  <div class="bg-input/50 inline-flex h-8 rounded-md p-0.5">
    <RadioGroup
      v-model="selectedValue"
      class="group after:bg-background has-focus-visible:after:border-ring has-focus-visible:after:ring-ring/50 relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-sm after:shadow-xs after:transition-[translate,box-shadow] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] has-focus-visible:after:ring-[3px] data-[state=off]:after:translate-x-0 data-[state=on]:after:translate-x-full"
      :data-state="selectedValue"
    >
      <label
        class="group-data-[state=on]:text-muted-foreground/70 relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-3 whitespace-nowrap transition-colors select-none"
      >
        Sitemap
        <RadioGroupItem :id="`${id}-1`" value="off" class="sr-only" />
      </label>
      <label
        class="group-data-[state=off]:text-muted-foreground/70 relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-3 whitespace-nowrap transition-colors select-none"
      >
        Wireframe
        <RadioGroupItem :id="`${id}-2`" value="on" class="sr-only" />
      </label>
    </RadioGroup>
  </div>
</template>
