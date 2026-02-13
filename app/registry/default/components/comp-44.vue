<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { PinInput, PinInputGroup, PinInputInput } from "@/registry/default/ui/pin-input";
import { ref, useId } from "vue";

const inputId = useId();
const value = ref(["", "", "", "", ""]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="inputId" class="text-foreground text-sm font-medium">OTP input single</Label>
    <PinInput :id="inputId" v-model="value">
      <PinInputGroup>
        <PinInputInput
          v-for="(id, index) in 5"
          :key="id"
          :index="index"
          class="focus:border-ring focus:ring-ring/50 size-9 font-medium shadow-xs transition-[color,box-shadow] focus:ring-[3px]"
        />
      </PinInputGroup>
    </PinInput>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
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
