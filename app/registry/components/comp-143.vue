<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(false);
</script>

<template>
  <div class="flex items-start gap-2">
    <Checkbox
      :id="id"
      class="order-1"
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
        You can use this checkbox with a label and a description.
      </p>
    </div>
  </div>
</template>
