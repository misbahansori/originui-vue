<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end add-on</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="google" type="text" />
      <InputGroupAddon align="inline-end">
        <InputGroupText class="font-normal">.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
