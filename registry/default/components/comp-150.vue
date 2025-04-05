<script setup lang="ts">
const id = useId();
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <div class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Dark mode toggle checkbox
    </legend>
    <div class="flex flex-col justify-center">
      <input
        type="checkbox"
        :name="id"
        :id="id"
        class="peer sr-only"
        :checked="colorMode.preference === 'dark'"
        @change="toggleColorMode"
      />
      <label
        class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px]"
        :for="id"
        :aria-label="`Switch to ${colorMode.preference === 'dark' ? 'light' : 'dark'} mode`"
      >
        <Icon
          name="lucide:moon"
          size="16"
          class="shrink-0 scale-0 opacity-0 transition-all"
          :class="{ 'scale-100 opacity-100': colorMode.preference === 'dark' }"
          aria-hidden="true"
        />
        <Icon
          name="lucide:sun"
          size="16"
          class="absolute shrink-0 transition-all"
          :class="{
            'scale-100 opacity-100': colorMode.preference === 'light',
            'scale-0 opacity-0': colorMode.preference === 'dark',
          }"
          aria-hidden="true"
        />
      </label>
    </div>
  </div>
</template>
