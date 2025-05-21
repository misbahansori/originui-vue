<script setup lang="ts">
import { defineProps } from "vue";
import { TreeRoot as RekaTreeRoot } from "reka-ui";

const props = withDefaults(defineProps<{
  items: Array<{ title: string; children?: Array<any> }>;
  defaultExpanded: Array<string>;
  indent: number;
}>(), {
  indent: 20,
});

provide<number>("treeIndent", props.indent || 20);
</script>

<template>
  <RekaTreeRoot
    v-slot="{ flattenItems }"
    class="flex flex-col"
    as="div"
    :style="{ '--tree-indent': `${indent}px` }"
    :items="items"
    :get-key="(item) => item.title"
    :default-expanded="defaultExpanded"
  >
    <slot :flatten-items="flattenItems" />
  </RekaTreeRoot>
</template>
