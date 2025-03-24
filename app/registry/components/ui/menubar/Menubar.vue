<script setup lang="ts">
import {
  MenubarRoot,
  type MenubarRootEmits,
  type MenubarRootProps,
  useForwardPropsEmits,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarRootProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<MenubarRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    :class="
      cn(
        'bg-background flex h-10 items-center gap-x-1 rounded-md border p-1',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>
