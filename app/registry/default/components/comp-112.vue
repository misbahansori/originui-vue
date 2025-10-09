<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { LucideSquareArrowOutUpRight } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button variant="outline">Preview</Button>
      <Button variant="outline" size="icon" aria-label="Open link">
        <LucideSquareArrowOutUpRight :size="16" aria-hidden="true" />
      </Button>
    </ButtonGroup>
  </div>
</template>
