<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Upvote"
    >
      <Icon name="lucide:chevron-up" size="16" aria-hidden="true" />
    </Button>
    <span
      class="border-input flex items-center border px-3 text-sm font-medium"
    >
      235
    </span>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Downvote"
    >
      <Icon name="lucide:chevron-down" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
