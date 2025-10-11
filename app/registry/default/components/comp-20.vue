<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideDownload } from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end icon button</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-sm"
          variant="outline"
          aria-label="Subscribe"
        >
          <LucideDownload :size="16" aria-hidden="true" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
