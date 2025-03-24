<script lang="ts" setup>
import type { DrawerTitleProps } from "vaul-vue";
import { DrawerTitle } from "vaul-vue";
import { computed, type HtmlHTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  DrawerTitleProps & { class?: HtmlHTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DrawerTitle
    v-bind="delegatedProps"
    :class="
      cn('text-lg leading-none font-semibold tracking-tight', props.class)
    "
  >
    <slot />
  </DrawerTitle>
</template>
