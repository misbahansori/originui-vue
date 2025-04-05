<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useClipboard } from "@vueuse/core";

const inputValue = ref("pnpm install origin-ui");
const inputRef = ref<HTMLInputElement | null>(null);

const { copy, copied } = useClipboard();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="copy-input">Copy to clipboard</Label>
    <div class="relative">
      <Input
        ref="inputRef"
        id="copy-input"
        class="pe-9"
        type="text"
        v-model="inputValue"
        readonly
      />
      <TooltipProvider>
        <Tooltip :delay-duration="0">
          <TooltipTrigger as-child>
            <button
              @click="copy(inputValue)"
              class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
              :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
              :disabled="copied"
            >
              <div
                :class="
                  cn(
                    'transition-all',
                    copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                  )
                "
              >
                <Icon
                  name="lucide:check"
                  class="stroke-emerald-500"
                  :size="16"
                  aria-hidden="true"
                />
              </div>
              <div
                :class="
                  cn(
                    'absolute transition-all',
                    copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
                  )
                "
              >
                <Icon name="lucide:copy" :size="16" aria-hidden="true" />
              </div>
            </button>
          </TooltipTrigger>
          <TooltipContent class="px-2 py-1 text-xs">
            Copy to clipboard
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
