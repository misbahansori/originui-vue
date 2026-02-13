<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { vMaska } from "maska/vue";
import { ref } from "vue";

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
      v-maska="'AA99 AAA'"
      maxlength="7"
    />
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
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
