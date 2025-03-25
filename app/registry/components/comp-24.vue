<script setup lang="ts">
const id = useId();
const inputValue = ref("Click to clear");
const inputRef = ref<HTMLInputElement | null>(null);

const handleClearInput = () => {
  inputValue.value = "";
  inputRef.value?.focus();
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with clear button</Label>
    <div class="relative">
      <Input
        :id="id"
        ref="inputRef"
        class="pe-9"
        placeholder="Type something..."
        type="text"
        v-model="inputValue"
      />
      <button
        v-if="inputValue"
        class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Clear input"
        @click="handleClearInput"
      >
        <Icon name="lucide:circle-x" :size="16" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
