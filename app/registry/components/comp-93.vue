<template>
  <Button variant="outline">
    <Icon
      name="lucide:printer"
      class="-ms-1 opacity-60"
      :size="16"
      aria-hidden="true"
    />
    Print
    <kbd
      class="bg-background text-muted-foreground/70 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
    >
      ⌘P
    </kbd>
  </Button>
</template>
