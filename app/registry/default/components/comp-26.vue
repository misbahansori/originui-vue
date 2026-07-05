<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideArrowRight, LucideSearch } from "lucide-vue-next";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="input">Search input with icon and button</Label>
    <InputGroup>
      <InputGroupInput id="input" placeholder="Search..." type="search" />
      <InputGroupAddon>
        <LucideSearch :size="16" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Submit search" type="submit">
          <LucideArrowRight :size="16" aria-hidden="true" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
