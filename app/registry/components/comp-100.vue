<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

function toggleOpen() {
  open.value = !open.value;
}
</script>

<template>
  <Button
    class="group"
    variant="outline"
    size="icon"
    @click="toggleOpen"
    :aria-expanded="open"
    :aria-label="open ? 'Close menu' : 'Open menu'"
  >
    <svg
      class="pointer-events-none"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L20 12"
        :class="[
          'origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)]',
          open ? 'translate-x-0 translate-y-0 rotate-[315deg]' : '',
        ]"
      />
      <path
        d="M4 12H20"
        :class="[
          'origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)]',
          open ? 'rotate-45' : '',
        ]"
      />
      <path
        d="M4 12H20"
        :class="[
          'origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)]',
          open ? 'translate-y-0 rotate-[135deg]' : '',
        ]"
      />
    </svg>
  </Button>
</template>
