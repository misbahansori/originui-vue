<script setup lang="ts">
const count = ref(3);

function handleClick() {
  count.value = 0;
}
</script>

<template>
  <Button
    variant="outline"
    size="icon"
    class="relative"
    @click="handleClick"
    aria-label="Notifications"
  >
    <Icon name="lucide:bell" size="16" aria-hidden="true" />
    <Badge
      v-if="count > 0"
      class="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1"
    >
      {{ count > 99 ? "99+" : count }}
    </Badge>
  </Button>
</template>
