<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" />
    <Label>
      I agree to the
      <a class="underline" href="https://originui.com" target="_blank">terms of service</a>
    </Label>
  </div>
</template>
