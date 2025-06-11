<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

const props = defineProps<{
  value: string;
}>();

const { copy, copied } = useClipboard({
  source: props.value,
  copiedDuring: 1500,
});
</script>

<template>
  <div>
    <Button
      variant="ghost"
      class="text-muted-foreground/80 hover:text-foreground h-7 max-w-full text-xs font-normal whitespace-normal hover:bg-transparent disabled:opacity-100"
      @click="copy()"
      :aria-label="copied ? 'Copied' : 'Copy Tailwind class'"
      :disabled="copied"
    >
      <div class="flex-1">
        <span v-if="copied">Copied</span>
        <span v-else class="transition-colors">Copy class</span>
      </div>
      <div class="relative">
        <div
          :class="[
            'transition-all',
            copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path
              fill="#10B981"
              d="M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z"
            />
          </svg>
        </div>
        <div
          :class="[
            'absolute -top-0.5 transition-all',
            copied ? 'scale-0 opacity-0' : 'scale-100 opacity-80',
          ]"
        >
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 2.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM10 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm3 5.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1H5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v1.5Z"
            />
          </svg>
        </div>
      </div>
    </Button>
  </div>
</template>
