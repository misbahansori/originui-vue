<script setup lang="ts">
// TODO: This component uses a third-party library (react-payment-inputs)
// We need to find an equivalent Vue library or implement custom functionality

const cvcCode = ref("");

// Simple CVC validation
function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value.replace(/\D/g, "");
  cvcCode.value = value.slice(0, 4); // Most cards have 3-4 digit CVC
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="cvc-code">Code</Label>
    <Input
      id="cvc-code"
      v-model="cvcCode"
      @input="handleInput"
      class="[direction:inherit]"
      placeholder="CVC"
      maxlength="4"
      type="password"
    />
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used react-payment-inputs -->
      Built with custom Vue CVC input
    </p>
  </div>
</template>
