<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { LucideFlipHorizontal, LucideFlipVertical } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Flip Horizontal">
        <LucideFlipHorizontal :size="16" aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Flip Vertical">
        <LucideFlipVertical :size="16" aria-hidden="true" />
      </Button>
    </ButtonGroup>
  </div>
</template>
