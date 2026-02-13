<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/registry/default/ui/button-group";
import { LucideChevronDown, LucideGitFork } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button>
        <LucideGitFork class="opacity-60" :size="16" aria-hidden="true" />
        Fork
        <span
          class="border-primary-foreground/30 text-primary-foreground/60 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
        >
          18
        </span>
      </Button>
      <ButtonGroupSeparator class="bg-primary/70" />
      <Button size="icon" aria-label="Options">
        <LucideChevronDown :size="16" aria-hidden="true" />
      </Button>
    </ButtonGroup>
  </div>
</template>
