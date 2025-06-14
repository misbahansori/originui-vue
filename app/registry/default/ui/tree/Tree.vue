<script setup lang="ts" generic="T extends Record<string, any>">
import { cn } from "@/lib/utils";
import type { TreeRootEmits, TreeRootProps } from "reka-ui";
import { TreeRoot, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<
    TreeRootProps<T> & {
      indent?: number;
      class?: HTMLAttributes["class"];
    }
  >(),
  { indent: 20 },
);
const delegatedProps = reactiveOmit(props, "class");
const emits = defineEmits<TreeRootEmits>();

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <TreeRoot
    data-slot="tree"
    :style="{
      '--tree-indent': `${props.indent}px`,
    }"
    :class="cn('flex flex-col', props.class)"
    v-bind="forwarded"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </TreeRoot>
</template>
