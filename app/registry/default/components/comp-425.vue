<script setup>
const isActive = ref(true);
</script>

<template>
  <Badge v-if="isActive" variant="outline" class="gap-0 rounded-md px-2 py-1">
    Tag
    <button
      class="focus-visible:border-ring focus-visible:ring-ring/50 text-foreground/60 hover:text-foreground -my-[5px] -ms-0.5 -me-2 inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
      @click="isActive = false"
      aria-label="Delete"
    >
      <Icon name="lucide:x" class="size-4" aria-hidden="true" />
    </button>
  </Badge>
</template>
