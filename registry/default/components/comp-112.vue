<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
    >
      Preview
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Open link"
    >
      <Icon
        name="lucide:square-arrow-out-up-right"
        size="16"
        aria-hidden="true"
      />
    </Button>
  </div>
</template>
