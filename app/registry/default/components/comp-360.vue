<template>
  <div class="inline-grid w-fit grid-cols-3 gap-1">
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            class="col-start-2"
            variant="outline"
            size="icon"
            aria-label="Pan camera up"
          >
            <Icon name="lucide:chevron-up" class="size-4" aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" class="px-2 py-1 text-xs">
          Pan top
          <kbd
            class="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
          >
            ⌘T
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            class="col-start-1"
            variant="outline"
            size="icon"
            aria-label="Pan camera left"
          >
            <Icon
              name="lucide:chevron-left"
              class="size-4"
              aria-hidden="true"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" class="px-2 py-1 text-xs">
          Pan left
          <kbd
            class="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
          >
            ⌘L
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <div class="flex items-center justify-center" aria-hidden="true">
      <Icon name="lucide:circle" class="size-4 opacity-60" />
    </div>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="outline" size="icon" aria-label="Pan camera right">
            <Icon
              name="lucide:chevron-right"
              class="size-4"
              aria-hidden="true"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" class="px-2 py-1 text-xs">
          Pan right
          <kbd
            class="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
          >
            ⌘R
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            class="col-start-2"
            variant="outline"
            size="icon"
            aria-label="Pan camera down"
          >
            <Icon
              name="lucide:chevron-down"
              class="size-4"
              aria-hidden="true"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" class="px-2 py-1 text-xs">
          Pan bottom
          <kbd
            class="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
          >
            ⌘B
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
