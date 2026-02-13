<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import {
  LucideAlignCenter,
  LucideAlignJustify,
  LucideAlignLeft,
  LucideAlignRight,
} from "lucide-vue-next";
import { ref } from "vue";

const value = ref("center");
</script>

<template>
  <ToggleGroup class="divide-background inline-flex divide-x" type="single" v-model="value">
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Left"
      value="left"
    >
      <LucideAlignLeft :size="16" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Center"
      value="center"
    >
      <LucideAlignCenter :size="16" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Right"
      value="right"
    >
      <LucideAlignRight :size="16" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Justify"
      value="justify"
    >
      <LucideAlignJustify :size="16" aria-hidden="true" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
