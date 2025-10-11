<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideMail } from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end icon</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <LucideMail :size="16" aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
