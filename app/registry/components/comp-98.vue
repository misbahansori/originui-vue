<script setup lang="ts">
const open = ref(false);

function toggleOpen() {
  open.value = !open.value;
}
</script>

<template>
  <Button
    class="group rounded-full"
    variant="outline"
    size="icon"
    @click="toggleOpen"
    :aria-expanded="open"
    :aria-label="open ? 'Close menu' : 'Open menu'"
  >
    <Icon
      name="lucide:plus"
      class="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)]"
      :class="{ 'rotate-[135deg]': open }"
      size="16"
      aria-hidden="true"
    />
  </Button>
</template>
