<script setup lang="ts">
import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { useClipboard } from "@vueuse/core";
import { LucideCheck, LucideCopy } from "lucide-vue-next";
import { ref } from "vue";

const inputValue = ref("pnpm install origin-ui");

const { copy, copied } = useClipboard();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="copy-input">Copy to clipboard</Label>
    <InputGroup>
      <InputGroupInput id="copy-input" type="text" v-model="inputValue" readonly />
      <InputGroupAddon align="inline-end">
        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger as-child>
              <InputGroupButton
                @click="copy(inputValue)"
                size="icon-xs"
                :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
                :disabled="copied"
              >
                <div
                  :class="
                    cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')
                  "
                >
                  <LucideCheck class="stroke-emerald-700" :size="16" aria-hidden="true" />
                </div>
                <div
                  :class="
                    cn(
                      'absolute transition-all',
                      copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
                    )
                  "
                >
                  <LucideCopy :size="16" aria-hidden="true" />
                </div>
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent class="px-2 py-1 text-xs">Copy to clipboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
