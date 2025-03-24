<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="icon" aria-label="Add new item">
          <Icon name="lucide:plus" size="16" aria-hidden="true" />
        </Button>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">Tooltip</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
