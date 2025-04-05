<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <Icon
          name="lucide:circle-alert"
          class="mt-0.5 size-4 shrink-0 text-red-500"
          aria-hidden="true"
        />
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <p class="text-sm font-medium">
              We couldn't complete your request!
            </p>
            <p class="text-muted-foreground text-sm">
              It indicates that an issue has prevented the processing of the
              request.
            </p>
          </div>
          <div class="flex gap-2">
            <Button size="sm">Learn more</Button>
          </div>
        </div>
        <Button
          variant="ghost"
          class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
        >
          <Icon
            name="lucide:x"
            class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  </div>
</template>
