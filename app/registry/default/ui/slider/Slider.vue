<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { SliderRootEmits, SliderRootProps } from "reka-ui";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  SliderRootProps & {
    class?: HTMLAttributes["class"];
    showTooltip?: boolean;
  }
>();
const emits = defineEmits<SliderRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const showTooltipState = ref(false);

const handlePointerDown = () => {
  if (props.showTooltip) {
    showTooltipState.value = true;
  }
};

const handlePointerUp = () => {
  if (props.showTooltip) {
    showTooltipState.value = false;
  }
};

onMounted(() => {
  if (props.showTooltip) {
    document.addEventListener("pointerup", handlePointerUp);
  }
});

onUnmounted(() => {
  if (props.showTooltip) {
    document.removeEventListener("pointerup", handlePointerUp);
  }
});
</script>

<template>
  <SliderRoot
    data-slot="slider"
    :class="
      cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <SliderTrack
      data-slot="slider-track"
      class="bg-muted relative my-1 grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
    >
      <SliderRange
        data-slot="slider-range"
        class="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>
    <template v-if="showTooltip">
      <TooltipProvider v-for="(_, key) in modelValue" :key="key">
        <Tooltip :open="showTooltipState">
          <TooltipTrigger asChild>
            <SliderThumb
              as="span"
              class="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
              data-slot="slider-thumb"
              @pointerdown="handlePointerDown"
            />
          </TooltipTrigger>
          <TooltipContent
            className="px-2 py-1 text-xs"
            :sideOffset="8"
            :side="props.orientation === 'vertical' ? 'right' : 'top'"
          >
            {{ modelValue?.[key] }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </template>
    <template v-else>
      <SliderThumb
        v-for="(_, key) in modelValue"
        :key="key"
        as="span"
        class="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
      />
    </template>
  </SliderRoot>
</template>
