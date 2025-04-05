<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import {
  SelectScrollDownButton,
  type SelectScrollDownButtonProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    v-bind="forwardedProps"
    :class="
      cn(
        'text-muted-foreground/80 flex cursor-default items-center justify-center py-1',
        props.class,
      )
    "
  >
    <slot>
      <ChevronDown class="h-4 w-4" />
    </slot>
  </SelectScrollDownButton>
</template>
