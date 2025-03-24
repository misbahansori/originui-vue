<template>
  <div class="*:not-first:mt-2">
    <Label>Input with end icon</Label>
    <div class="relative">
      <Input class="peer pe-9" placeholder="Email" type="email" />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50"
      >
        <Icon name="lucide:mail" :size="16" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
