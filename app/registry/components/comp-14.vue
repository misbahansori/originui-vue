<template>
  <div class="*:not-first:mt-2">
    <Label>Input with start add-on</Label>
    <div class="flex rounded-md shadow-xs">
      <span
        class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm"
      >
        https://
      </span>
      <Input
        class="-ms-px rounded-s-none shadow-none"
        placeholder="google.com"
        type="text"
      />
    </div>
  </div>
</template>
