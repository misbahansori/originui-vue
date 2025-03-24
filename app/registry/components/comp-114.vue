<template>
  <div
    class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse"
  >
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
    >
      <Icon
        name="lucide:git-fork"
        class="opacity-60"
        size="16"
        aria-hidden="true"
      />
      Fork
      <span
        class="border-primary-foreground/30 text-primary-foreground/60 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
      >
        18
      </span>
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      size="icon"
      aria-label="Options"
    >
      <Icon name="lucide:chevron-down" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
