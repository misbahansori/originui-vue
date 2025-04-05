<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="sm">W/ icon</Button>
      </TooltipTrigger>
      <TooltipContent class="dark py-3">
        <div class="flex gap-3">
          <Icon
            name="lucide:globe"
            class="mt-0.5 size-4 shrink-0 opacity-60"
            aria-hidden="true"
          />
          <div class="space-y-1">
            <p class="text-[13px] font-medium">Tooltip with title and icon</p>
            <p class="text-muted-foreground text-xs">
              Tooltips are made to be highly customizable, with features like
              dynamic placement, rich content, and a robust API.
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
