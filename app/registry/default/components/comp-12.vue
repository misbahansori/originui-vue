<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with end inline add-on</Label>
    <InputGroup>
      <InputGroupInput placeholder="google" type="text" />
      <InputGroupAddon align="inline-end">
        <InputGroupText class="font-normal">.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
