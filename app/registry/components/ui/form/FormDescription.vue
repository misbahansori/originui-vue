<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";
import { useFormField } from "./useFormField";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { formDescriptionId } = useFormField();
</script>

<template>
  <p
    :id="formDescriptionId"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </p>
</template>
