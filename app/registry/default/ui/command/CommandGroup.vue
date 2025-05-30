<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { ListboxGroupProps } from "reka-ui";
import { ListboxGroup, ListboxGroupLabel, useId } from "reka-ui";
import { computed, type HTMLAttributes, onMounted, onUnmounted } from "vue";
import { provideCommandGroupContext, useCommand } from ".";

const props = defineProps<
  ListboxGroupProps & {
    class?: HTMLAttributes["class"];
    heading?: string;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const { allGroups, filterState } = useCommand();
const id = useId();

const isRender = computed(() =>
  !filterState.search ? true : filterState.filtered.groups.has(id),
);

provideCommandGroupContext({ id });
onMounted(() => {
  if (!allGroups.value.has(id)) allGroups.value.set(id, new Set());
});
onUnmounted(() => {
  allGroups.value.delete(id);
});
</script>

<template>
  <ListboxGroup
    v-bind="delegatedProps"
    :id="id"
    data-slot="command-group"
    :class="
      cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        props.class,
      )
    "
    :hidden="isRender ? undefined : true"
  >
    <ListboxGroupLabel
      v-if="heading"
      class="text-muted-foreground px-2 py-1.5 text-xs font-medium"
    >
      {{ heading }}
    </ListboxGroupLabel>
    <slot />
  </ListboxGroup>
</template>
