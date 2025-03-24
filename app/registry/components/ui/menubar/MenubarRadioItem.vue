<script setup lang="ts">
import { Circle } from "lucide-vue-next";
import {
  MenubarItemIndicator,
  MenubarRadioItem,
  type MenubarRadioItemEmits,
  type MenubarRadioItemProps,
  useForwardPropsEmits,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarRadioItemProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<MenubarRadioItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Circle class="h-2 w-2 fill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
