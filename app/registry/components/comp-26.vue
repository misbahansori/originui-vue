<template>
  <div class="*:not-first:mt-2">
    <Label>Search input with icon and button</Label>
    <div class="relative">
      <Input class="peer ps-9 pe-9" placeholder="Search..." type="search" />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
      >
        <Icon name="lucide:search" :size="16" />
      </div>
      <button
        class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Submit search"
        type="submit"
      >
        <Icon name="lucide:arrow-right" :size="16" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
