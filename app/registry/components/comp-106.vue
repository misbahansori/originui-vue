<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Flip Horizontal"
    >
      <Icon name="lucide:flip-horizontal" size="16" aria-hidden="true" />
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Flip Vertical"
    >
      <Icon name="lucide:flip-vertical" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
