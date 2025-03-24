<script setup lang="ts">
// TODO: This component uses a third-party library (input-otp)
// We need to find an equivalent Vue library or implement custom functionality
const otpValue = ref(["", "", "", ""]);
const activeIndex = ref(0);

const handleInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  if (value && value.length === 1) {
    otpValue.value[index] = value;
    if (index < otpValue.value.length - 1) {
      activeIndex.value = index + 1;
    }
  }
};

const focusInput = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>OTP input single</Label>
    <div class="flex items-center gap-3 has-disabled:opacity-50">
      <div class="flex">
        <div
          v-for="(slot, idx) in otpValue"
          :key="idx"
          :class="[
            'border-input bg-background text-foreground relative -ms-px flex size-9 items-center justify-center border font-medium shadow-xs transition-[color,box-shadow]',
            idx === 0 ? 'ms-0 rounded-s-md' : '',
            idx === otpValue.length - 1 ? 'rounded-e-md' : '',
            activeIndex === idx
              ? 'border-ring ring-ring/50 z-10 ring-[3px]'
              : '',
          ]"
          @click="focusInput(idx)"
        >
          <input
            type="text"
            maxlength="1"
            v-model="otpValue[idx]"
            @input="handleInput($event, idx)"
            @focus="focusInput(idx)"
            class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <div v-if="otpValue[idx]">{{ otpValue[idx] }}</div>
        </div>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used input-otp library -->
      Built with custom Vue OTP input
    </p>
  </div>
</template>
