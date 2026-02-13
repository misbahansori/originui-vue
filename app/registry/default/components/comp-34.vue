<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { computed, ref, useId } from "vue";

const id = useId();
const inputValue = ref("");
const maxLength = 50;

const characterCount = computed(() => inputValue.value.length);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with character limit</Label>
    <InputGroup>
      <InputGroupInput :id="id" v-model="inputValue" type="text" :maxlength="maxLength" />
      <InputGroupAddon align="inline-end">
        <InputGroupText class="text-xs tabular-nums" aria-live="polite" role="status">
          {{ characterCount }}/{{ maxLength }}
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
