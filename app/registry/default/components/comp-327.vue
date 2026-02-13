<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { useClipboard } from "@vueuse/core";
import { LucideCheck, LucideCopy, LucideUserRoundPlus } from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const emails = ref(["mark@yourcompany.com", "jane@yourcompany.com", ""]);

const addEmail = () => {
  emails.value = [...emails.value, ""];
};

const { copy, copied } = useClipboard();
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Invite members</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideUserRoundPlus class="size-4 opacity-80" aria-hidden="true" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Invite team members</DialogTitle>
          <DialogDescription class="text-left">
            Invite teammates to earn free components.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <div class="*:not-first:mt-2">
            <Label>Invite via email</Label>
            <div class="space-y-3">
              <Input
                v-for="(email, index) in emails"
                :key="index"
                :id="`team-email-${index + 1}`"
                placeholder="hi@yourcompany.com"
                type="email"
                v-model="emails[index]"
              />
            </div>
          </div>
          <button type="button" @click="addEmail" class="text-sm underline hover:no-underline">
            + Add another
          </button>
        </div>
        <Button type="button" class="w-full">Send invites</Button>
      </form>

      <hr class="my-1 border-t" />

      <div class="*:not-first:mt-2">
        <Label :for="`${id}-magic-link`">Invite via magic link</Label>
        <div class="relative">
          <Input
            ref="inputRef"
            :id="`${id}-magic-link`"
            class="pe-9"
            type="text"
            defaultValue="https://originui.com/refer/87689"
            readonly
          />
          <TooltipProvider :delay-duration="0">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  @click="() => copy('https://originui.com/refer/87689')"
                  class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                  :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
                  :disabled="copied"
                >
                  <div
                    class="transition-all"
                    :class="copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
                  >
                    <LucideCheck class="size-4 stroke-emerald-500" aria-hidden="true" />
                  </div>
                  <div
                    class="absolute transition-all"
                    :class="copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'"
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
    </DialogContent>
  </Dialog>
</template>
