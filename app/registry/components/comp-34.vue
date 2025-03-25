<script setup lang="ts">
const id = useId();
const inputValue = ref("");
const maxLength = 50;

const characterCount = computed(() => inputValue.value.length);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with character limit</Label>
    <div class="relative">
      <Input
        :id="id"
        v-model="inputValue"
        class="peer pe-14"
        type="text"
        :maxlength="maxLength"
      />
      <div
        class="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums peer-disabled:opacity-50"
        aria-live="polite"
        role="status"
      >
        {{ characterCount }}/{{ maxLength }}
      </div>
    </div>
  </div>
</template>
