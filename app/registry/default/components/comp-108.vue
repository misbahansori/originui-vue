<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { LucideEllipsis, LucideFiles, LucideFilm } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button variant="outline">
        <LucideFiles class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
        Files
      </Button>
      <Button variant="outline">
        <LucideFilm class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
        Media
      </Button>
      <Button variant="outline" size="icon" aria-label="Menu">
        <LucideEllipsis :size="16" aria-hidden="true" />
      </Button>
    </ButtonGroup>
  </div>
</template>
