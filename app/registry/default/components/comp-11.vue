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
    <Label for="input">Input with start inline add-on</Label>
    <InputGroup>
      <InputGroupInput id="input" placeholder="google.com" type="text" />
      <InputGroupAddon>
        <InputGroupText class="font-normal">https://</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
