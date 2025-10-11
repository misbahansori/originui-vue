<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end select</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="google" type="text" />
      <InputGroupAddon align="inline-end">
        <SelectNative
          class="text-muted-foreground hover:text-foreground -my-1.5 -mr-3 w-fit border-0 bg-transparent shadow-none"
        >
          <option>.com</option>
          <option>.org</option>
          <option>.net</option>
        </SelectNative>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
