<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from "@/registry/default/ui/pin-input";
import { ref, useId } from "vue";

const inputId = useId();
const otpValues = ref(["", "", "", ""]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="inputId">OTP input (spaced)</Label>
    <PinInput :id="inputId" class="flex items-center gap-3">
      <PinInputGroup class="flex items-center gap-3">
        <PinInputInput
          v-for="(id, index) in otpValues"
          :key="id"
          :index="index"
          class="focus:border-ring focus:ring-ring/50 border-input size-9 rounded-md border font-medium shadow-xs transition-[color,box-shadow] focus:ring-[3px]"
        ></PinInputInput>
      </PinInputGroup>
    </PinInput>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with shadcn-vue
      <a
        class="hover:text-foreground underline"
        href="https://www.shadcn-vue.com/docs/components/pin-input.html"
        target="_blank"
        rel="noopener nofollow"
      >
        PinInput
      </a>
    </p>
  </div>
</template>
