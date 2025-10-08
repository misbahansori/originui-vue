<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/default/ui/button-group";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button
        class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Upvote"
      >
        <LucideChevronUp :size="16" aria-hidden="true" />
      </Button>
      <ButtonGroupText
        class="bg-primary text-primary-foreground border-transparent px-1 text-sm font-medium"
      >
        235
      </ButtonGroupText>
      <Button
        class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Downvote"
      >
        <LucideChevronDown :size="16" aria-hidden="true" />
      </Button>
    </ButtonGroup>
  </div>
</template>
