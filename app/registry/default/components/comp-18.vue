<script setup lang="ts">
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="input">Input with end select</Label>
    <ButtonGroup class="w-full">
      <Input id="input" class="-me-px" placeholder="google" type="text" />
      <NativeSelect
        modelValue=".com"
        class="text-muted-foreground hover:text-foreground field-sizing-content w-fit rounded-s-none shadow-none"
      >
        <option value=".com">.com</option>
        <option value=".org">.org</option>
        <option value=".net">.net</option>
      </NativeSelect>
    </ButtonGroup>
  </div>
</template>
