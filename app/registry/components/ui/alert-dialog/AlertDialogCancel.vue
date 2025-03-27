<script setup lang="ts">
import { AlertDialogCancel, type AlertDialogCancelProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { buttonVariants } from "~/registry/components/ui/button";
import { cn } from "~/utils/utils";

const props = defineProps<
  AlertDialogCancelProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AlertDialogCancel
    v-bind="delegatedProps"
    :class="cn(buttonVariants({ variant: 'outline' }), props.class)"
  >
    <slot />
  </AlertDialogCancel>
</template>
