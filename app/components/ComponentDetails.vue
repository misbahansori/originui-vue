<script setup lang="ts">
import type { RegistryItem } from "~/utils/component-utils";

interface Props {
  component: RegistryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="absolute top-2 right-2 flex gap-2 peer-data-comp-loading:hidden">
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
              >
                <Icon name="lucide:code" size="16" aria-hidden="true" />
              </Button>
            </DialogTrigger>
          </span>
        </TooltipTrigger>
        <TooltipContent class="text-muted-foreground px-2 py-1 text-xs">
          View code
        </TooltipContent>
      </Tooltip>
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle class="text-left">Code</DialogTitle>
          <div class="space-y-4">
            <p class="text-lg font-semibold tracking-tight">Code</p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
</template>
