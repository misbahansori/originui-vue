<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(false);
</script>

<template>
  <div
    class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
  >
    <Checkbox
      :id="id"
      class="order-1 after:absolute after:inset-0"
      :aria-describedby="`${id}-description`"
      v-model="checked"
    />
    <div class="grid grow gap-2">
      <Label :for="id">
        Label
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (Sublabel)
        </span>
      </Label>
      <p :id="`${id}-description`" class="text-muted-foreground text-xs">
        A short description goes here.
      </p>
    </div>
  </div>
</template>
