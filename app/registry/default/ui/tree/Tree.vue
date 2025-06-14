<script setup lang="ts" generic="T extends Record<string, any>">
import type { TreeRootEmits, TreeRootProps } from "reka-ui";
import { TreeRoot, useForwardPropsEmits } from "reka-ui";

const props = defineProps<TreeRootProps<T>>();
const emits = defineEmits<TreeRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <TreeRoot data-slot="tree" v-bind="forwarded" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </TreeRoot>
</template>
