<template>
  <div class="rounded-md border border-red-500/50 px-4 py-3 text-red-600">
    <div class="flex items-start gap-3">
      <Icon
        name="lucide:circle-alert"
        class="mt-0.5 size-4 shrink-0 opacity-60"
        aria-hidden="true"
      />
      <div class="grow space-y-1">
        <p class="text-sm font-medium">Password does not meet requirements:</p>
        <ul class="list-inside list-disc text-sm opacity-80">
          <li>Minimum 8 characters</li>
          <li>Include a special character</li>
        </ul>
      </div>
    </div>
  </div>
</template>
