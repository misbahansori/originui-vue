<script setup lang="ts">
import { ButtonGroup, ButtonGroupText } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with end add-on</Label>
    <ButtonGroup class="w-full gap-0!">
      <Input placeholder="google" type="text" />
      <ButtonGroupText class="text-muted-foreground bg-background border-input px-3">
        .com
      </ButtonGroupText>
    </ButtonGroup>
  </div>
</template>
