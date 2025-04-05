<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-semibold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="pointer-events-none h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
