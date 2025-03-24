<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
</script>

<template>
  <div class="flex gap-6">
    <div class="flex items-center gap-2">
      <Checkbox :id="`${id}-a`" v-model="checked1" />
      <Label :for="`${id}-a`">Vue</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox :id="`${id}-b`" v-model="checked2" />
      <Label :for="`${id}-b`">Nuxt</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox :id="`${id}-c`" v-model="checked3" />
      <Label :for="`${id}-c`">Astro</Label>
    </div>
  </div>
</template>
