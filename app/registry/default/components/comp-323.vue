<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { Textarea } from "@/registry/default/ui/textarea";
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Rating</Button>
    </DialogTrigger>
    <DialogContent class="flex flex-col gap-0 p-0 [&>button:last-child]:top-3.5">
      <DialogHeader class="contents space-y-0 text-left">
        <DialogTitle class="border-b px-6 py-4 text-base">Help us improve</DialogTitle>
      </DialogHeader>
      <div class="px-6 py-4">
        <form class="space-y-5">
          <div class="space-y-4">
            <div>
              <fieldset class="space-y-4">
                <legend class="text-foreground text-lg leading-none font-semibold">
                  How hard was it to set up your account?
                </legend>
                <RadioGroup class="flex gap-0 -space-x-px rounded-md shadow-xs">
                  <label
                    v-for="number in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
                    :key="number"
                    class="border-input has-data-[state=checked]:border-primary/50 focus-within:border-ring focus-within:ring-ring/50 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border text-center text-sm transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md focus-within:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:z-10"
                  >
                    <RadioGroupItem
                      :id="`radio-17-r${number}`"
                      :value="number.toString()"
                      class="sr-only after:absolute after:inset-0"
                    />
                    {{ number }}
                  </label>
                </RadioGroup>
              </fieldset>
              <div class="text-muted-foreground mt-2 flex justify-between text-xs">
                <p>Very easy</p>
                <p>Very difficult</p>
              </div>
            </div>

            <div class="*:not-first:mt-2">
              <Label>Why did you give this rating?</Label>
              <Textarea
                id="feedback"
                placeholder="How can we improve Origin UI?"
                aria-label="Send feedback"
              />
            </div>
          </div>
          <Button type="button" class="w-full">Send feedback</Button>
        </form>
      </div>
    </DialogContent>
  </Dialog>
</template>
