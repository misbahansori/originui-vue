<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(false);

const toggleSwitch = () => {
  checked.value = !checked.value;
};
</script>

<template>
  <div
    class="group inline-flex items-center gap-2"
    :data-state="checked ? 'checked' : 'unchecked'"
  >
    <span
      :id="`${id}-off`"
      class="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
      :aria-controls="id"
      @click="checked = false"
    >
      <Icon name="lucide:moon" size="16" aria-hidden="true" />
    </span>
    <Switch
      :id="id"
      v-model:checked="checked"
      :aria-labelledby="`${id}-off ${id}-on`"
      aria-label="Toggle between dark and light mode"
    />
    <span
      :id="`${id}-on`"
      class="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
      :aria-controls="id"
      @click="checked = true"
    >
      <Icon name="lucide:sun" size="16" aria-hidden="true" />
    </span>
  </div>
</template>
