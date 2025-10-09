<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/ui/button-group";
import { LucideChevronDown, LucidePin } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button size="icon" aria-label="Options">
        <LucideChevronDown :size="16" aria-hidden="true" />
      </Button>
      <ButtonGroupSeparator class="bg-primary/70" />
      <Button>
        <LucidePin class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
        Pinned
      </Button>
    </ButtonGroup>
  </div>
</template>
