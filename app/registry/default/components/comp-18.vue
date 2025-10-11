<script setup lang="ts">
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end select</Label>
    <ButtonGroup>
      <Input
        :id="id"
        class="-me-px rounded-e-none shadow-none focus-visible:z-10"
        placeholder="google"
        type="text"
      />
      <SelectNative
        class="text-muted-foreground hover:text-foreground w-fit rounded-s-none shadow-none"
      >
        <option>.com</option>
        <option>.org</option>
        <option>.net</option>
      </SelectNative>
    </ButtonGroup>
  </div>
</template>
