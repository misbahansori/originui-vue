<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { vMaska } from "maska/vue";
import { ref } from "vue";

const inputValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="timestamp-input">Timestamp</Label>
    <Input
      id="timestamp-input"
      placeholder="00:00:00"
      type="text"
      v-model="inputValue"
      v-maska="'##:##:##'"
      maxlength="8"
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
