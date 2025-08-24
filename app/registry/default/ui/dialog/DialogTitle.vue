<script setup lang="ts">
import { cn } from "@/lib/utils";
import { reactiveOmit } from "@vueuse/core";
import type { DialogTitleProps } from "reka-ui";
import { DialogTitle, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DialogTitle
    data-slot="dialog-title"
    v-bind="forwardedProps"
    :class="cn('text-lg leading-none font-semibold', props.class)"
  >
    <slot />
  </DialogTitle>
</template>
