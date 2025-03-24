<script setup lang="ts">
// TODO: This component uses a third-party library (input-otp)
// We need to find an equivalent Vue library or implement custom functionality
const otpValue = ref(["", "", "", "", "", ""]);
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
    <Label>OTP input double</Label>
    <div class="flex items-center gap-3 has-disabled:opacity-50">
      <div class="flex">
        <div
          v-for="idx in 3"
          :key="`first-${idx - 1}`"
          :class="[
            'border-input bg-background text-foreground relative -ms-px flex size-9 items-center justify-center border font-medium shadow-xs transition-[color,box-shadow]',
            idx === 1 ? 'ms-0 rounded-s-md' : '',
            idx === 3 ? 'rounded-e-md' : '',
            activeIndex === idx - 1
              ? 'border-ring ring-ring/50 z-10 ring-[3px]'
              : '',
          ]"
          @click="focusInput(idx - 1)"
        >
          <input
            type="text"
            maxlength="1"
            v-model="otpValue[idx - 1]"
            @input="handleInput($event, idx - 1)"
            @focus="focusInput(idx - 1)"
            class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <div v-if="otpValue[idx - 1]">{{ otpValue[idx - 1] }}</div>
        </div>
      </div>

      <div class="text-muted-foreground/80">
        <Icon name="lucide:minus" :size="16" aria-hidden="true" />
      </div>

      <div class="flex">
        <div
          v-for="idx in 3"
          :key="`second-${idx + 2}`"
          :class="[
            'border-input bg-background text-foreground relative -ms-px flex size-9 items-center justify-center border font-medium shadow-xs transition-[color,box-shadow]',
            idx === 1 ? 'ms-0 rounded-s-md' : '',
            idx === 3 ? 'rounded-e-md' : '',
            activeIndex === idx + 2
              ? 'border-ring ring-ring/50 z-10 ring-[3px]'
              : '',
          ]"
          @click="focusInput(idx + 2)"
        >
          <input
            type="text"
            maxlength="1"
            v-model="otpValue[idx + 2]"
            @input="handleInput($event, idx + 2)"
            @focus="focusInput(idx + 2)"
            class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <div v-if="otpValue[idx + 2]">{{ otpValue[idx + 2] }}</div>
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
