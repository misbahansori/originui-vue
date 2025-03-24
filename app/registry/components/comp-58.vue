<script setup lang="ts">
// TODO: This component uses a third-party library (input-otp)
// We need to find an equivalent Vue library or implement custom functionality
import { ref } from "vue";

const otpValues = ref(["", "", "", ""]);
const activeIndex = ref(0);

function handleInput(index: number, e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;

  // Only allow a single character per input
  if (value.length > 0) {
    otpValues.value[index] = value.slice(-1);

    // Move to next input if available
    if (index < otpValues.value.length - 1) {
      activeIndex.value = index + 1;
      // Focus the next input
      setTimeout(() => {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }, 0);
    }
  }
}

function handleKeydown(index: number, e: KeyboardEvent) {
  // Handle backspace
  if (e.key === "Backspace") {
    if (otpValues.value[index] === "") {
      // If current input is empty, move to previous input
      if (index > 0) {
        activeIndex.value = index - 1;
        otpValues.value[index - 1] = "";
        setTimeout(() => {
          const prevInput = document.getElementById(`otp-input-${index - 1}`);
          if (prevInput) {
            (prevInput as HTMLInputElement).focus();
          }
        }, 0);
      }
    } else {
      // Clear current input
      otpValues.value[index] = "";
    }
  }
}

function handleFocus(index: number) {
  activeIndex.value = index;
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="otp-input-0">OTP input (spaced)</Label>
    <div class="flex items-center gap-3">
      <div class="flex gap-2">
        <div
          v-for="(value, index) in otpValues"
          :key="index"
          :class="
            cn(
              'border-input bg-background text-foreground flex size-9 items-center justify-center rounded-md border font-medium shadow-xs transition-[color,box-shadow]',
              {
                'border-ring ring-ring/50 z-10 ring-[3px]':
                  activeIndex === index,
              },
            )
          "
        >
          <input
            :id="`otp-input-${index}`"
            v-model="otpValues[index]"
            @input="handleInput(index, $event)"
            @keydown="handleKeydown(index, $event)"
            @focus="handleFocus(index)"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="1"
            class="absolute h-full w-full appearance-none border-0 bg-transparent text-center outline-none focus:ring-0"
            :aria-label="`Digit ${index + 1} of 4`"
          />
          <div v-if="value">{{ value }}</div>
        </div>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used input-otp -->
      Built with custom Vue OTP input implementation
    </p>
  </div>
</template>
