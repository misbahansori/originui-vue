<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  text?: string;
}>();

const { copied, copy } = useClipboard();
</script>
<template>
  <div :class="cn('dark absolute top-2 right-2', props.class)">
    <TooltipProvider :delayDuration="0">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            :disabled="copied"
            variant="ghost"
            size="icon"
            class="text-muted-foreground hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
            @click="() => copy(props.text ?? '')"
          >
            <div
              class="transition-all"
              :class="!copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
            >
              <Icon name="lucide:copy" size="16" aria-hidden="true" />
            </div>
            <div
              class="absolute transition-all"
              :class="copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
            >
              <Icon name="lucide:check" size="16" aria-hidden="true" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">Copy</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
