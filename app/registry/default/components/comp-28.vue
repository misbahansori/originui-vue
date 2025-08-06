<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/default/ui/number-field";
import { ref, useId } from "vue";

const id = useId();
const value = ref(2048);
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label :for="id">Number input with plus/minus buttons</Label>
      <NumberField :id="id" :min="0" v-model="value">
        <NumberFieldDecrement />
        <NumberFieldInput class="text-center" />
        <NumberFieldIncrement />
      </NumberField>
    </div>

    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/number-field"
        target="_blank"
        rel="noopener noreferrer"
      >
        NumberField
      </a>
    </p>
  </div>
</template>
