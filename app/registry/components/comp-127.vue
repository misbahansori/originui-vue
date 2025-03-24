<template>
  <div class="inline-grid w-fit grid-cols-3 gap-1">
    <Button
      class="col-start-2"
      variant="outline"
      size="icon"
      aria-label="Pan camera up"
    >
      <Icon name="lucide:chevron-up" size="16" aria-hidden="true" />
    </Button>
    <Button
      class="col-start-1"
      variant="outline"
      size="icon"
      aria-label="Pan camera left"
    >
      <Icon name="lucide:chevron-left" size="16" aria-hidden="true" />
    </Button>
    <div class="flex items-center justify-center" aria-hidden="true">
      <Icon name="lucide:circle" class="opacity-60" size="16" />
    </div>
    <Button variant="outline" size="icon" aria-label="Pan camera right">
      <Icon name="lucide:chevron-right" size="16" aria-hidden="true" />
    </Button>
    <Button
      class="col-start-2"
      variant="outline"
      size="icon"
      aria-label="Pan camera down"
    >
      <Icon name="lucide:chevron-down" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
