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
    <Label :for="id">Input with inline add-ons</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="0.00" type="text" />
      <InputGroupAddon>
        <InputGroupText class="font-normal">€</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText class="font-normal">EUR</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
