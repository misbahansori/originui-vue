<script setup lang="ts">
import { Toggle } from "@/registry/default/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { LucideBookmark } from "lucide-vue-next";
import { ref } from "vue";

const bookmarked = ref(false);
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <div>
          <Toggle
            class="group size-9 p-0 hover:bg-indigo-50 hover:text-indigo-500 data-[state=on]:bg-indigo-50 data-[state=on]:text-indigo-500"
            aria-label="Bookmark this"
            v-model="bookmarked"
          >
            <LucideBookmark :size="16" aria-hidden="true" />
          </Toggle>
        </div>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">
        <p>{{ bookmarked ? "Remove bookmark" : "Bookmark this" }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
