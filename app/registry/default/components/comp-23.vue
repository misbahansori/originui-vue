<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideEye, LucideEyeOff } from "lucide-vue-next";
import { ref } from "vue";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Show/hide password input</Label>
    <InputGroup>
      <InputGroupInput placeholder="Password" :type="isVisible ? 'text' : 'password'" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          @click="toggleVisibility"
          :aria-label="isVisible ? 'Hide password' : 'Show password'"
          :aria-pressed="isVisible"
          aria-controls="password"
        >
          <LucideEyeOff v-if="isVisible" :size="16" aria-hidden="true" />
          <LucideEye v-else :size="16" aria-hidden="true" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
