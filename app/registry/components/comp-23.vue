<script setup lang="ts">
const id = useId();
const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Show/hide password input</Label>
    <div class="relative">
      <Input
        :id="id"
        class="pe-9"
        placeholder="Password"
        :type="isVisible ? 'text' : 'password'"
      />
      <button
        class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        @click="toggleVisibility"
        :aria-label="isVisible ? 'Hide password' : 'Show password'"
        :aria-pressed="isVisible"
        aria-controls="password"
      >
        <Icon
          v-if="isVisible"
          name="lucide:eye-off"
          :size="16"
          aria-hidden="true"
        />
        <Icon v-else name="lucide:eye" :size="16" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
