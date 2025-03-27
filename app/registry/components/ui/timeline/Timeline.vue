<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { cn } from "~/utils/utils";

interface TimelineContextValue {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const props = withDefaults(
  defineProps<{
    defaultValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    orientation?: "horizontal" | "vertical";
    class?: string;
  }>(),
  {
    defaultValue: 1,
    orientation: "vertical",
  },
);

const activeStep = ref(props.defaultValue);

const setActiveStep = (step: number) => {
  if (props.value === undefined) {
    activeStep.value = step;
  }
  props.onValueChange?.(step);
};

const currentStep = computed(() => props.value ?? activeStep.value);

provide<TimelineContextValue>("timeline", {
  activeStep: currentStep.value,
  setActiveStep,
});
</script>

<template>
  <div
    data-slot="timeline"
    :class="
      cn(
        'group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
        props.class,
      )
    "
    :data-orientation="orientation"
  >
    <slot />
  </div>
</template>
