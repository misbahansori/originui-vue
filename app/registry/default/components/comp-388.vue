<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { Textarea } from "@/registry/default/ui/textarea";
</script>

<template>
  <div class="flex flex-col gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Feedback</Button>
      </PopoverTrigger>
      <PopoverContent class="w-72">
        <h2 class="mb-2 text-sm font-semibold">Send us feedback</h2>
        <form class="space-y-3">
          <Textarea
            id="feedback"
            placeholder="How can we improve Origin UI?"
            aria-label="Send feedback"
          />
          <div class="flex flex-col sm:flex-row sm:justify-end">
            <Button size="sm">Send feedback</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  </div>
</template>
