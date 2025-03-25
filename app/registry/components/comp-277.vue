<template>
  <div class="rounded-md border px-4 py-3">
    <div class="flex items-start gap-3">
      <Icon
        name="lucide:circle-alert"
        class="mt-0.5 size-4 shrink-0 text-red-500 opacity-60"
        aria-hidden="true"
      />
      <div class="grow space-y-1">
        <p class="text-sm font-medium">Password does not meet requirements:</p>
        <ul class="text-muted-foreground list-inside list-disc text-sm">
          <li>Minimum 8 characters</li>
          <li>Include a special character</li>
        </ul>
      </div>
    </div>
  </div>
</template>
