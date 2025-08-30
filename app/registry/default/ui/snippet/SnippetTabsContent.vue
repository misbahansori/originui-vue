<script setup lang="ts">
import { cn } from "@/lib/utils";
import { reactiveOmit } from "@vueuse/core";
import { TabsContent, type TabsContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <TabsContent
    data-slot="snippet-tabs-content"
    v-bind="delegatedProps"
    :class="cn('bg-background mt-0 p-4 text-sm', props.class)"
  >
    <slot />
  </TabsContent>
</template>
