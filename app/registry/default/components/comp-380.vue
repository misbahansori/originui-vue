<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { useColorMode } from "@vueuse/core";
import { LucideMonitor, LucideMoon, LucideSun } from "lucide-vue-next";
import { computed } from "vue";

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
          <LucideSun
            v-if="colorMode === 'light'"
            class="size-4"
            aria-hidden="true"
          />
          <LucideMoon
            v-if="colorMode === 'dark'"
            class="size-4"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-32">
        <DropdownMenuItem @click="store = 'light'">
          <LucideSun class="size-4 opacity-60" aria-hidden="true" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="store = 'dark'">
          <LucideMoon class="size-4 opacity-60" aria-hidden="true" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="store = 'auto'">
          <LucideMonitor class="size-4 opacity-60" aria-hidden="true" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
