<template>
  <div class="rounded-md border border-amber-500/50 px-4 py-3 text-amber-600">
    <div class="flex gap-3">
      <Icon
        name="lucide:triangle-alert"
        class="mt-0.5 shrink-0 opacity-60"
        :size="16"
        aria-hidden="true"
      />
      <div class="flex grow justify-between gap-3">
        <p class="text-sm">Some information is missing!</p>
        <a href="#" class="group text-sm font-medium whitespace-nowrap">
          Link
          <Icon
            name="lucide:arrow-right"
            class="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
            :size="16"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </div>
</template>
