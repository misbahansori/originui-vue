<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import { Primitive } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { computed, inject } from "vue";

export interface MiniCalendarNavigationProps {
  direction: "prev" | "next";
  asChild?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<MiniCalendarNavigationProps>(), {
  asChild: false,
});

const context = inject<{
  onNavigate: (direction: "prev" | "next") => void;
}>("mini-calendar");

if (!context) {
  throw new Error(
    "MiniCalendarNavigation must be used within MiniCalendar component",
  );
}

const Icon = computed(() =>
  props.direction === "prev" ? ChevronLeftIcon : ChevronRightIcon,
);

const handleClick = () => {
  context.onNavigate(props.direction);
};
</script>

<template>
  <Primitive v-if="asChild" as-child @click="handleClick">
    <slot />
  </Primitive>
  <Button
    v-else
    size="icon"
    type="button"
    variant="ghost"
    @click="handleClick"
    :class="props.class"
  >
    <slot>
      <component :is="Icon" class="size-4" />
    </slot>
  </Button>
</template>
