<script setup lang="ts">
import { Switch } from "@/registry/default/ui/switch";
import { ref, useId } from "vue";

const id = useId();
const checked = ref(false);
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
      Off
    </span>
    <Switch
      :id="id"
      v-model="checked"
      :aria-labelledby="`${id}-off ${id}-on`"
    />
    <span
      :id="`${id}-on`"
      class="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
      :aria-controls="id"
      @click="checked = true"
    >
      On
    </span>
  </div>
</template>
