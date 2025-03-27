<script setup>
const isActive = ref(true);
</script>

<template>
  <Badge v-if="isActive" class="gap-0">
    Removable
    <button
      class="focus-visible:border-ring focus-visible:ring-ring/50 text-primary-foreground/60 hover:text-primary-foreground -my-px -ms-px -me-1.5 inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
      @click="isActive = false"
    >
      <Icon name="lucide:x" class="size-4" aria-hidden="true" />
    </button>
  </Badge>
</template>
