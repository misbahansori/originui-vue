<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/default/ui/separator";
import { reactiveOmit } from "@vueuse/core";
import type { SeparatorProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<SeparatorProps & { class?: HTMLAttributes["class"] }>(),
  {
    orientation: "vertical",
  },
);
const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <Separator
    data-slot="button-group-separator"
    v-bind="delegatedProps"
    :orientation="props.orientation"
    :class="
      cn(
        'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
        props.class,
      )
    "
  />
</template>
