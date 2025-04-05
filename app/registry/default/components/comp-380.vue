<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const { system, store } = useColorMode();

const colorMode = computed(() =>
  store.value === "auto" ? system.value : store.value,
);
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" aria-label="Select theme">
          <Icon
            v-if="colorMode === 'light'"
            name="lucide:sun"
            class="size-4"
            aria-hidden="true"
          />
          <Icon
            v-if="colorMode === 'dark'"
            name="lucide:moon"
            class="size-4"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-32">
        <DropdownMenuItem @click="store = 'light'">
          <Icon
            name="lucide:sun"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="store = 'dark'">
          <Icon
            name="lucide:moon"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="store = 'auto'">
          <Icon
            name="lucide:monitor"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
