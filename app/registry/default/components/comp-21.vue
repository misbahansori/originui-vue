<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end button</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm" variant="outline">Send</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
