<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end button</Label>
    <div class="flex rounded-md shadow-xs">
      <Input
        :id="id"
        class="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
        placeholder="Email"
        type="email"
      />
      <button
        class="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </div>
  </div>
</template>
