<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/ui/button-group";
import { LucideQrCode } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button size="icon" aria-label="QR code">
        <LucideQrCode :size="16" aria-hidden="true" />
      </Button>
      <ButtonGroupSeparator class="bg-primary/70" />
      <Button>Sign in</Button>
    </ButtonGroup>
  </div>
</template>
