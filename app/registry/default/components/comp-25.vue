<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Kbd } from "@/registry/default/ui/kbd";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Search input with &lt;kbd&gt;</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="Search..." type="search" />
      <InputGroupAddon align="inline-end">
        <Kbd
          class="text-muted-foreground/70 bg-background border text-[0.625rem]"
        >
          ⌘K
        </Kbd>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
