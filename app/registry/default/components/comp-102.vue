<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/default/ui/button-group";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
</script>

<template>
  <ButtonGroup>
    <Button variant="outline" size="icon" aria-label="Upvote">
      <LucideChevronUp :size="16" aria-hidden="true" />
    </Button>
    <ButtonGroupText class="bg-background text-sm font-medium">
      235
    </ButtonGroupText>
    <Button variant="outline" size="icon" aria-label="Downvote">
      <LucideChevronDown :size="16" aria-hidden="true" />
    </Button>
  </ButtonGroup>
</template>
