<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { injectMiniCalendarContext } from "@/registry/default/ui/mini-calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import { Primitive } from "reka-ui";
import { computed } from "vue";

export interface MiniCalendarNavigationProps extends PrimitiveProps {
  direction: "prev" | "next";
}

const props = withDefaults(defineProps<MiniCalendarNavigationProps>(), {
  as: Button,
});

const context = injectMiniCalendarContext();

const Icon = computed(() =>
  props.direction === "prev" ? ChevronLeftIcon : ChevronRightIcon,
);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    type="button"
    size="icon"
    variant="ghost"
    @click="props.direction === 'prev' ? context.prev() : context.next()"
  >
    <slot>
      <component :is="Icon" class="size-4" />
    </slot>
  </Primitive>
</template>
