<template>
  <div
    class="inline-flex -space-x-px rounded-full shadow-xs rtl:space-x-reverse"
  >
    <Button
      class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
      size="icon"
      aria-label="Upvote"
    >
      <Icon name="lucide:chevron-up" size="16" aria-hidden="true" />
    </Button>
    <span
      class="bg-primary text-primary-foreground flex items-center px-1 text-sm font-medium"
    >
      235
    </span>
    <Button
      class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
      size="icon"
      aria-label="Downvote"
    >
      <Icon name="lucide:chevron-down" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
