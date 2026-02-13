<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideCircleX } from "lucide-vue-next";
import { ref, useId, useTemplateRef } from "vue";

const id = useId();
const inputValue = ref("Click to clear");
const inputRef = useTemplateRef("inputRef");

const handleClearInput = () => {
  inputValue.value = "";
  inputRef.value?.$el?.focus();
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with clear button</Label>
    <InputGroup>
      <InputGroupInput
        :id="id"
        ref="inputRef"
        placeholder="Type something..."
        type="text"
        v-model="inputValue"
      />
      <InputGroupAddon v-if="inputValue" align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Clear input" @click.prevent="handleClearInput">
          <LucideCircleX :size="16" aria-hidden="true" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
