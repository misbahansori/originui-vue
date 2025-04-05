<script setup lang="ts">
import { mask as vMask } from "vue-the-mask";

const cvcCode = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="cvc-code">Code</Label>
    <Input
      id="cvc-code"
      v-model="cvcCode"
      class="[direction:inherit]"
      placeholder="CVC"
      maxlength="4"
      v-mask="'###'"
    />
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
