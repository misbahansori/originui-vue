<template>
  <div
    class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse"
  >
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      size="icon"
      aria-label="Options"
    >
      <Icon name="lucide:chevron-down" size="16" aria-hidden="true" />
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
    >
      <Icon
        name="lucide:pin"
        class="-ms-1 opacity-60"
        size="16"
        aria-hidden="true"
      />
      Pinned
    </Button>
  </div>
</template>
