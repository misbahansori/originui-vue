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
    <Label :for="id">Input with start add-on</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="google.com" type="text" />
      <InputGroupAddon>
        <InputGroupText class="font-normal">https://</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
