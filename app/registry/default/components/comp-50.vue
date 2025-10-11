<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { LucideCreditCard } from "lucide-vue-next";
import { vMaska } from "maska/vue";
import { ref } from "vue";

const cardNumber = ref("");
const expiryDate = ref("");
const cvcCode = ref("");

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <legend class="text-foreground text-sm font-medium">Card Details</legend>
    <div class="rounded-md shadow-xs">
      <div class="relative focus-within:z-10">
        <Input
          class="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
          :id="`card-number-${id}`"
          v-model="cardNumber"
          v-maska="'#### #### #### ####'"
          placeholder="0000 0000 0000 0000"
          maxlength="19"
        />
        <div
          class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50"
        >
          <LucideCreditCard :size="16" aria-hidden="true" />
        </div>
      </div>
      <div class="-mt-px flex">
        <div class="min-w-0 flex-1 focus-within:z-10">
          <Input
            class="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
            :id="`expiry-date-${id}`"
            v-model="expiryDate"
            v-maska="'##/##'"
            placeholder="MM/YY"
            maxlength="5"
          />
        </div>
        <div class="-ms-px min-w-0 flex-1 focus-within:z-10">
          <Input
            class="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
            :id="`cvc-code-${id}`"
            v-model="cvcCode"
            v-maska="'###'"
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
      Built with
      <a
        class="hover:text-foreground underline"
        href="https://beholdr.github.io/maska/v3/#/vue"
        target="_blank"
        rel="noopener nofollow"
      >
        maska
      </a>
    </p>
  </div>
</template>
