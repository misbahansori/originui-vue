<template>
  <div class="*:not-first:mt-2">
    <Label>Input with start icon</Label>
    <div class="relative">
      <Input class="peer ps-9" placeholder="Email" type="email" />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
      >
        <Icon name="lucide:at-sign" :size="16" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
