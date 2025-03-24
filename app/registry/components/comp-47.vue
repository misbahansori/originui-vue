<script setup lang="ts">
// TODO: This component uses a third-party library (react-payment-inputs)
// We need to find an equivalent Vue library or implement custom functionality
import { ref } from "vue";

const cardNumber = ref("");

// Simple credit card number validation and formatting
function formatCardNumber(value: string) {
  const v = value.replace(/\s+/g, "").replace(/\D/g, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  cardNumber.value = formatCardNumber(target.value);
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="card-number">Card Number</Label>
    <div class="relative">
      <Input
        id="card-number"
        v-model="cardNumber"
        @input="handleInput"
        class="peer ps-9 [direction:inherit]"
        placeholder="0000 0000 0000 0000"
        maxlength="19"
      />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
      >
        <Icon name="lucide:credit-card" :size="16" aria-hidden="true" />
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used react-payment-inputs -->
      Built with custom Vue credit card formatting
    </p>
  </div>
</template>
