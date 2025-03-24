<template>
  <div class="*:not-first:mt-2">
    <Label>Input with end add-on</Label>
    <div class="flex rounded-md shadow-xs">
      <Input
        class="-me-px rounded-e-none shadow-none"
        placeholder="google"
        type="text"
      />
      <span
        class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-e-md border px-3 text-sm"
      >
        .com
      </span>
    </div>
  </div>
</template>
