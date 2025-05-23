<script setup lang="ts">
import { defineProps } from "vue";
import { TreeRoot as RekaTreeRoot } from "reka-ui";
import { type TreeRootProps } from "reka-ui";

import { provide } from "vue";

type Props = TreeRootProps & {
    indent?: number;
};

const props = withDefaults(defineProps<Props>(), {
  indent: 20,
});

provide<number>("treeIndent", props.indent);
</script>

<template>
  <RekaTreeRoot
    v-bind="$props"
    v-slot="{ flattenItems }"
    class="flex flex-col"
    as="div"
    :style="{ '--tree-indent': `${indent}px` }"
    :items="items"
    :default-expanded="defaultExpanded"
  >
    <slot :flatten-items="flattenItems" />
  </RekaTreeRoot>
</template>
