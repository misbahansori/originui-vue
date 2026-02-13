<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { RiCodeFill, RiFacebookFill, RiMailLine, RiTwitterXFill } from "@remixicon/vue";
import { useClipboard } from "@vueuse/core";
import { LucideCheck, LucideCopy } from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
const code = ref("https://originui.com/Avx8HD");

const { copy, copied } = useClipboard();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Share</Button>
      </PopoverTrigger>
      <PopoverContent class="w-72">
        <div class="flex flex-col gap-3 text-center">
          <div class="text-sm font-medium">Share code</div>
          <div class="flex flex-wrap justify-center gap-2">
            <Button size="icon" variant="outline" aria-label="Embed">
              <RiCodeFill size="16" aria-hidden="true" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Share on Twitter">
              <RiTwitterXFill size="16" aria-hidden="true" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Share on Facebook">
              <RiFacebookFill size="16" aria-hidden="true" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Share via email">
              <RiMailLine size="16" aria-hidden="true" />
            </Button>
          </div>
          <div class="space-y-2">
            <div class="relative">
              <Input
                :id="id"
                class="pe-9"
                type="text"
                v-model="code"
                aria-label="Share link"
                readonly
              />
              <TooltipProvider :delay-duration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      @click="() => copy(code)"
                      class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                      :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
                      :disabled="copied"
                    >
                      <div
                        :class="[
                          'transition-all',
                          copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                        ]"
                      >
                        <LucideCheck class="size-4 stroke-emerald-500" aria-hidden="true" />
                      </div>
                      <div
                        :class="[
                          'absolute transition-all',
                          copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
                        ]"
                      >
                        <LucideCopy class="size-4" aria-hidden="true" />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent class="px-2 py-1 text-xs">Copy to clipboard</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
