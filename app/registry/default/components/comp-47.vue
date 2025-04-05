<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { LucideCreditCard } from "lucide-vue-next";
import { ref } from "vue";
import { mask as vMask } from "vue-the-mask";

const cardNumber = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="card-number">Card Number</Label>
    <div class="relative">
      <Input
        id="card-number"
        v-model="cardNumber"
        class="peer ps-9 [direction:inherit]"
        placeholder="0000 0000 0000 0000"
        maxlength="19"
        v-mask="'#### #### #### ####'"
      />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
      >
        <LucideCreditCard :size="16" aria-hidden="true" />
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
        href="https://vuejs-tips.github.io/vue-the-mask"
        target="_blank"
        rel="noopener nofollow"
      >
        vue-the-mask
      </a>
    </p>
  </div>
</template>
