<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { ButtonVariants } from "@/registry/default/ui/button";
import { buttonVariants } from "@/registry/default/ui/button";
import { useClipboard } from "@vueuse/core";
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import { Primitive } from "reka-ui";
import { type HTMLAttributes } from "vue";

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

const { copy, copied } = useClipboard({
  copiedDuring: props.timeout,
});
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
    @click="copy(props.value)"
  >
    <slot>
      <div
        class="transition-all"
        :class="!copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
      >
        <CopyIcon class="text-foreground/90 size-4" aria-hidden="true" />
      </div>
      <div
        class="absolute transition-all"
        :class="copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
      >
        <CheckIcon class="text-foreground/90 size-4" aria-hidden="true" />
      </div>
    </slot>
  </Primitive>
</template>
