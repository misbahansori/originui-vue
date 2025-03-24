<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
    >
      <Icon
        name="lucide:files"
        class="-ms-1 opacity-60"
        size="16"
        aria-hidden="true"
      />
      Files
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
    >
      <Icon
        name="lucide:film"
        class="-ms-1 opacity-60"
        size="16"
        aria-hidden="true"
      />
      Media
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Menu"
    >
      <Icon name="lucide:ellipsis" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
