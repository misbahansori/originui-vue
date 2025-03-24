<template>
  <div class="border-t py-16 lg:py-24">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
    >
      <div>
        <h3 class="text-lg font-semibold">Subscribe for updates</h3>
        <p class="text-muted-foreground mt-4">
          Subscribe to get notified when we add new components or update
          existing ones.
        </p>
      </div>
      <div class="lg:col-span-2">
        <form class="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            class="focus:border-primary h-10 rounded-md border px-3 focus:outline-none"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export function SubscribeBottom() {
  return {
    render() {
      return {}; // This is just a reference to the component
    },
  };
}
</script>
