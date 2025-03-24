<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" disabled />
    <Label :for="id">Disabled checkbox</Label>
  </div>
</template>
