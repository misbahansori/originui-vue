<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { RegistryItem } from "shadcn/registry";

interface Props {
  component: RegistryItem;
  isSearchPage?: boolean;
  class?: string;
}

const props = defineProps<Props>();

const getColSpanClasses = (includeStart = false) => {
  const baseClasses =
    props.component.meta?.colSpan === 2
      ? "col-span-12 sm:col-span-6 lg:col-span-6"
      : props.component.meta?.colSpan === 3
        ? "col-span-12 sm:col-span-12 lg:col-span-12"
        : "col-span-12 sm:col-span-6 lg:col-span-4";

  const startClasses =
    includeStart && props.component.meta?.colSpan !== 3
      ? props.component.meta?.colSpan === 2
        ? "sm:col-start-4 lg:col-start-4"
        : "sm:col-start-4 lg:col-start-5"
      : "";

  return cn(baseClasses, startClasses);
};

const styleClasses = computed(() => {
  return props.component.meta?.style === 1
    ? "flex justify-center items-center"
    : props.component.meta?.style === 2
      ? "text-center"
      : "";
});
</script>

<template>
  <div
    :class="
      cn(
        'group/item relative border has-[[data-comp-loading=true]]:border-none',
        props.isSearchPage
          ? 'col-span-12 grid grid-cols-12'
          : cn(getColSpanClasses(), styleClasses),
      )
    "
  >
    <template v-if="props.isSearchPage">
      <div :class="cn(getColSpanClasses(true), styleClasses)">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
