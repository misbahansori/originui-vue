<script setup lang="ts">
import { ButtonGroup, ButtonGroupText } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="input">Input with start add-on</Label>
    <ButtonGroup class="w-full gap-0!">
      <ButtonGroupText class="text-muted-foreground bg-background border-input px-3">
        https://
      </ButtonGroupText>
      <Input id="input" class="-ms-px" placeholder="google.com" type="text" />
    </ButtonGroup>
  </div>
</template>
