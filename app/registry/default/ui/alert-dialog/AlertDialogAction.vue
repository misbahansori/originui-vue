<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
import { reactiveOmit } from "@vueuse/core";
import type { AlertDialogActionProps } from "reka-ui";
import { AlertDialogAction } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  AlertDialogActionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
    :class="cn(buttonVariants(), props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>
