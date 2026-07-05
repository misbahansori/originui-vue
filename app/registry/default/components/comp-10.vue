<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideMail } from "lucide-vue-next";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with end icon</Label>
    <InputGroup>
      <InputGroupInput placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <LucideMail :size="16" aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
