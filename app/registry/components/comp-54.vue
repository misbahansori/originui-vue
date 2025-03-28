<script setup lang="ts">
import { mask as vMask } from "vue-the-mask";

const inputValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="masked-input">Input with mask</Label>
    <Input
      id="masked-input"
      placeholder="AB12 CDE"
      type="text"
      v-model="inputValue"
      v-mask="'AA99 AAA'"
      maxlength="7"
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
