<script setup lang="ts">
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
    <Icon
      v-if="isExpanded"
      name="lucide:chevron-up"
      class="-me-1"
      size="16"
      aria-hidden="true"
    />
    <Icon
      v-else
      name="lucide:chevron-down"
      class="-me-1"
      size="16"
      aria-hidden="true"
    />
  </Button>
</template>
