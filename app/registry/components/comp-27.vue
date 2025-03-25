<script setup lang="ts">
const id = useId();
const inputValue = ref("");
const isLoading = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

watchEffect(() => {
  if (inputValue.value) {
    isLoading.value = true;
    timer = setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }

  return () => timer && clearTimeout(timer);
});
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Search input with loader</Label>
    <div class="relative">
      <Input
        :id="id"
        class="peer ps-9 pe-9"
        placeholder="Search..."
        type="search"
        v-model="inputValue"
      />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
      >
        <Icon
          v-if="isLoading"
          name="lucide:loader-circle"
          class="animate-spin"
          :size="16"
          role="status"
          aria-label="Loading..."
        />
        <Icon v-else name="lucide:search" :size="16" aria-hidden="true" />
      </div>
      <button
        class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Press to speak"
        type="submit"
      >
        <Icon name="lucide:mic" :size="16" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
