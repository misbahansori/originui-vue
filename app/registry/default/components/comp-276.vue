<template>
  <div class="rounded-md border border-amber-500/50 px-4 py-3 text-amber-600">
    <div class="flex items-start gap-3">
      <Icon
        name="lucide:triangle-alert"
        class="mt-0.5 size-4 shrink-0 opacity-60"
        aria-hidden="true"
      />
      <div class="flex grow justify-between gap-3">
        <p class="text-sm">Some information is missing!</p>
        <a
          href="#"
          class="group flex items-center text-sm font-medium whitespace-nowrap"
        >
          Link
          <Icon
            name="lucide:arrow-right"
            class="ms-1 inline-flex size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </div>
</template>
