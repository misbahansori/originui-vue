<script setup lang="ts">
// TODO: This component uses a third-party library (react-payment-inputs)
// We need to find an equivalent Vue library or implement custom functionality
import { ref } from "vue";

const expiryDate = ref("");

// Simple expiry date validation and formatting
function formatExpiryDate(value: string) {
  const v = value.replace(/\s+/g, "").replace(/\D/g, "");

  if (v.length <= 2) {
    return v;
  }

  return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  expiryDate.value = formatExpiryDate(target.value);
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="expiry-date">Expiry date</Label>
    <Input
      id="expiry-date"
      v-model="expiryDate"
      @input="handleInput"
      class="[direction:inherit]"
      placeholder="MM/YY"
      maxlength="5"
    />
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used react-payment-inputs -->
      Built with custom Vue expiry date formatting
    </p>
  </div>
</template>
