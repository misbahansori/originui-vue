<script setup lang="ts">
// TODO: Implement this component

const open = ref(false);
</script>

<template>
  <ToastProvider>
    <Button variant="outline" @click="open = true">Show toast</Button>
    <Toast v-model:open="open">
      <div class="flex gap-2">
        <div class="flex grow gap-3">
          <Icon
            name="lucide:circle-check"
            class="mt-0.5 size-4 shrink-0 text-emerald-500"
            aria-hidden="true"
          />
          <div class="flex grow flex-col gap-3">
            <div class="space-y-1">
              <ToastTitle>Completed successfully!</ToastTitle>
              <ToastDescription>
                The operation has been completed successfully.
              </ToastDescription>
            </div>
            <div class="flex gap-2">
              <ToastAction altText="Learn more">Learn more</ToastAction>
            </div>
          </div>
          <ToastClose />
        </div>
      </div>
      <div
        class="absolute right-0 bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-100"
      />
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
