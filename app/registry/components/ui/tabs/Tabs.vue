<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from "reka-ui";
import { TabsRoot, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  TabsRootProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<TabsRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <TabsRoot :class="cn('flex flex-col gap-2', props.class)" v-bind="forwarded">
    <slot />
  </TabsRoot>
</template>
