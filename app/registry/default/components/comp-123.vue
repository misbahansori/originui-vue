<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
import { ref } from "vue";

const isExpanded = ref(false);

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <Button
    class="gap-1"
    variant="ghost"
    @click="toggleExpand"
    :aria-expanded="isExpanded"
    aria-controls="expandable-content"
  >
    {{ isExpanded ? "Show less" : "Show more" }}
    <LucideChevronUp v-if="isExpanded" class="-me-1" :size="16" aria-hidden="true" />
    <LucideChevronDown v-else class="-me-1" :size="16" aria-hidden="true" />
  </Button>
</template>
