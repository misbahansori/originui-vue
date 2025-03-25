<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end icon button</Label>
    <div class="flex rounded-md shadow-xs">
      <Input
        :id="id"
        class="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
        placeholder="Email"
        type="email"
      />
      <button
        class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-9 items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Subscribe"
      >
        <Icon name="lucide:download" :size="16" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
