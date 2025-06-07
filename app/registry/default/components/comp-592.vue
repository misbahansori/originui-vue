<script setup lang="ts">
import { LucideLayoutGrid, LucidePlus, LucideSearch } from "lucide-vue-next";
import { ref, useId } from "vue";

import InfoMenu from "@/registry/default/components/navbar-components/InfoMenu.vue";
import NotificationMenu from "@/registry/default/components/navbar-components/NotificationMenu.vue";
import SettingsMenu from "@/registry/default/components/navbar-components/SettingsMenu.vue";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

const id = useId();
const checked = ref(true);
</script>

<template>
  <header class="border-b px-4 md:px-6">
    <div class="flex h-16 items-center justify-between gap-4">
      <!-- Left side -->
      <div class="relative flex-1">
        <Input
          :id="`input-${id}`"
          class="peer h-8 w-full max-w-xs ps-8 pe-2"
          placeholder="Search..."
          type="search"
        />
        <div
          class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50"
        >
          <LucideSearch :size="16" />
        </div>
      </div>
      <!-- Right side -->
      <div class="flex items-center gap-4">
        <!-- Test mode -->
        <div class="inline-flex items-center gap-2 max-md:hidden">
          <Label :for="`switch-${id}`" class="text-sm font-medium">
            Test mode
          </Label>
          <Switch
            :id="`switch-${id}`"
            v-model="checked"
            class="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
            aria-label="Toggle switch"
          />
        </div>
        <div class="flex items-center gap-2">
          <!-- Layout button -->
          <Button
            size="icon"
            variant="ghost"
            class="text-muted-foreground size-8 rounded-full shadow-none"
            aria-label="Open layout menu"
          >
            <LucideLayoutGrid :size="16" aria-hidden="true" />
          </Button>
          <!-- Info menu -->
          <InfoMenu />
          <!-- Notification -->
          <NotificationMenu />
          <!-- Settings -->
          <SettingsMenu />
        </div>
        <!-- Add button -->
        <Button
          class="size-8 rounded-full"
          size="icon"
          aria-label="Add new item"
        >
          <LucidePlus :size="16" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </header>
</template>
