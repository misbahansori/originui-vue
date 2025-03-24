<script setup lang="ts">
// TODO: This component uses a third-party library (react-payment-inputs)
// We need to find an equivalent Vue library or implement custom functionality
import { ref } from "vue";

const cardNumber = ref("");
const expiryDate = ref("");
const cvcCode = ref("");
const cardType = ref("");

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

// Simple expiry date validation and formatting
function formatExpiryDate(value: string) {
  const v = value.replace(/\s+/g, "").replace(/\D/g, "");

  if (v.length <= 2) {
    return v;
  }

  return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
}

function handleCardNumberInput(e: Event) {
  const target = e.target as HTMLInputElement;
  cardNumber.value = formatCardNumber(target.value);

  // Very simple card type detection
  if (cardNumber.value.startsWith("4")) {
    cardType.value = "visa";
  } else if (cardNumber.value.startsWith("5")) {
    cardType.value = "mastercard";
  } else if (cardNumber.value.startsWith("3")) {
    cardType.value = "amex";
  } else {
    cardType.value = "";
  }
}

function handleExpiryInput(e: Event) {
  const target = e.target as HTMLInputElement;
  expiryDate.value = formatExpiryDate(target.value);
}

function handleCVCInput(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value.replace(/\D/g, "");
  cvcCode.value = value.slice(0, 4);
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <legend class="text-foreground text-sm font-medium">Card Details</legend>
    <div class="rounded-md shadow-xs">
      <div class="relative focus-within:z-10">
        <Input
          class="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
          id="card-number"
          v-model="cardNumber"
          @input="handleCardNumberInput"
          placeholder="0000 0000 0000 0000"
          maxlength="19"
        />
        <div
          class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50"
        >
          <Icon
            v-if="cardType === 'visa'"
            name="lucide:credit-card"
            :size="16"
            aria-hidden="true"
          />
          <Icon
            v-else-if="cardType === 'mastercard'"
            name="lucide:credit-card"
            :size="16"
            aria-hidden="true"
          />
          <Icon
            v-else-if="cardType === 'amex'"
            name="lucide:credit-card"
            :size="16"
            aria-hidden="true"
          />
          <Icon
            v-else
            name="lucide:credit-card"
            :size="16"
            aria-hidden="true"
          />
        </div>
      </div>
      <div class="-mt-px flex">
        <div class="min-w-0 flex-1 focus-within:z-10">
          <Input
            class="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
            id="expiry-date"
            v-model="expiryDate"
            @input="handleExpiryInput"
            placeholder="MM/YY"
            maxlength="5"
          />
        </div>
        <div class="-ms-px min-w-0 flex-1 focus-within:z-10">
          <Input
            class="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
            id="cvc-code"
            v-model="cvcCode"
            @input="handleCVCInput"
            placeholder="CVC"
            maxlength="4"
            type="password"
          />
        </div>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used react-payment-inputs -->
      Built with custom Vue payment inputs
    </p>
  </div>
</template>
