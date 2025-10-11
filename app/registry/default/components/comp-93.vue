<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Kbd } from "@/registry/default/ui/kbd";
import { LucidePrinter } from "lucide-vue-next";
</script>

<template>
  <Button variant="outline">
    <LucidePrinter class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
    Print
    <Kbd
      class="text-muted-foreground/70 bg-background ms-1 -me-1 border text-[0.625rem]"
    >
      ⌘P
    </Kbd>
  </Button>
</template>
