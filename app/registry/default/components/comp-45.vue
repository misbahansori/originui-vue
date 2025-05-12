<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  PinInput,
  PinInputGroup,
  PinInputSlot,
} from "@/registry/default/ui/pin-input";
import { LucideMinus } from "lucide-vue-next";
import { ref, useId } from "vue";

const inputId = useId();
const value = ref(["", "", "", "", "", ""]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="inputId">OTP input double</Label>
    <PinInput
      :id="inputId"
      v-model="value"
      class="flex items-center gap-3 has-disabled:opacity-50"
    >
      <PinInputGroup>
        <template v-for="(id, index) in 6" :key="id">
          <PinInputSlot
            :index="index"
            :class="[
              'focus:border-ring focus:ring-ring/50 relative -ms-px size-9 border font-medium shadow-xs transition-[color,box-shadow] focus:ring-[3px]',
              index % 3 === 0 ? 'ms-0 rounded-s-md' : '',
              index % 3 === 2 ? 'rounded-e-md' : '',
            ]"
          ></PinInputSlot>
          <div v-if="index === 2" class="text-muted-foreground/80">
            <LucideMinus :size="16" aria-hidden="true" />
          </div>
        </template>
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
