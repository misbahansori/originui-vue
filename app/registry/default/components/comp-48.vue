<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";
import { mask as vMask } from "vue-the-mask";

const expiryDate = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="expiry-date">Expiry date</Label>
    <Input
      id="expiry-date"
      v-model="expiryDate"
      class="[direction:inherit]"
      placeholder="MM/YY"
      maxlength="5"
      v-mask="'##/##'"
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
