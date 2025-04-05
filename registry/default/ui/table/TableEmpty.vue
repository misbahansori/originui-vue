<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";
import TableCell from "./TableCell.vue";
import TableRow from "./TableRow.vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    colspan?: number;
  }>(),
  {
    colspan: 1,
  },
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <TableRow>
    <TableCell
      :class="
        cn(
          'text-foreground p-4 align-middle text-sm whitespace-nowrap',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <div class="flex items-center justify-center py-10">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
