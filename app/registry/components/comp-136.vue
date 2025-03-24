<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id" class="peer-data-[state=checked]:line-through">
      Simple todo item
    </Label>
  </div>
</template>
