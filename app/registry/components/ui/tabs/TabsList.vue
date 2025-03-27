<script setup lang="ts">
import { TabsList, type TabsListProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  TabsListProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="
      cn(
        'bg-muted text-muted-foreground/70 inline-flex w-fit items-center justify-center rounded-md p-0.5',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>
