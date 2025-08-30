<script setup lang="ts">
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import { Primitive } from "reka-ui";
import { ref, type HTMLAttributes } from "vue";
import type { ButtonVariants } from "../button";
import { buttonVariants } from "../button";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  value: string;
  timeout?: number;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  variant: "ghost",
  size: "icon",
  timeout: 2000,
});

const emits = defineEmits<{
  copy: [];
  error: [error: Error];
}>();

const isCopied = ref(false);

const copyToClipboard = async () => {
  if (
    typeof window === "undefined" ||
    !navigator.clipboard?.writeText ||
    !props.value
  ) {
    return;
  }

  try {
    await navigator.clipboard.writeText(props.value);
    isCopied.value = true;
    emits("copy");
    setTimeout(() => {
      isCopied.value = false;
    }, props.timeout);
  } catch (error) {
    emits("error", error as Error);
  }
};
</script>

<template>
  <Primitive
    data-slot="snippet-copy-button"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({ variant, size }),
        'opacity-0 transition-opacity group-hover:opacity-100',
        props.class,
      )
    "
    @click="copyToClipboard"
  >
    <slot>
      <CheckIcon v-if="isCopied" :size="14" />
      <CopyIcon v-else :size="14" />
    </slot>
  </Primitive>
</template>
