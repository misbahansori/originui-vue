<script setup lang="ts">
// TODO: This component uses a third-party library (use-mask-input)
// We need to find an equivalent Vue library or implement custom functionality

const inputValue = ref("");

function applyMask(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value.toUpperCase();

  let maskedValue = "";
  const pattern = "AA99 AAA"; // Mask pattern: A = letter, 9 = digit
  let valueIndex = 0;

  for (let i = 0; i < pattern.length && valueIndex < value.length; i++) {
    const patternChar = pattern[i];

    if (patternChar === " ") {
      maskedValue += " ";
    } else {
      const valueChar = value[valueIndex] || "";
      valueIndex++;

      if (patternChar === "A" && /[A-Z]/.test(valueChar)) {
        maskedValue += valueChar;
      } else if (patternChar === "9" && /[0-9]/.test(valueChar)) {
        maskedValue += valueChar;
      } else {
        // If character doesn't match pattern, don't advance
        valueIndex--;
      }
    }
  }

  inputValue.value = maskedValue;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="masked-input">Input with mask</Label>
    <Input
      id="masked-input"
      placeholder="AB12 CDE"
      type="text"
      v-model="inputValue"
      @input="applyMask"
      maxlength="7"
    />
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used use-mask-input -->
      Built with custom Vue mask implementation
    </p>
  </div>
</template>
