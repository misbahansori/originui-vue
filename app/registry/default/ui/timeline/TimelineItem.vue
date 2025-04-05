<script setup lang="ts">
import { cn } from "@/lib/utils";
import { inject } from "vue";

interface TimelineContextValue {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const props = defineProps<{
  step: number;
  class?: string;
}>();

const { activeStep } = inject<TimelineContextValue>("timeline")!;
</script>

<template>
  <div
    data-slot="timeline-item"
    :class="
      cn(
        'group/timeline-item has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-primary relative flex flex-1 flex-col gap-0.5 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=vertical]/timeline:not-last:pb-12',
        props.class,
      )
    "
    :data-completed="step <= activeStep || undefined"
  >
    <slot />
  </div>
</template>
