<script setup lang="ts">
import { LucideMic, LucideSearch } from "lucide-vue-next";
import { useId } from "vue";

import Logo from "@/registry/default/components/NavbarComponents/Logo.vue";
import ThemeToggle from "@/registry/default/components/NavbarComponents/ThemeToggle.vue";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";

const id = useId();
</script>

<template>
  <header class="border-b px-4 md:px-6">
    <div class="flex h-16 items-center justify-between gap-4">
      <!-- Logo -->
      <div class="flex-1">
        <a href="#" class="text-primary hover:text-primary/90">
          <Logo />
        </a>
      </div>
      <!-- Middle area -->
      <div class="grow max-sm:hidden">
        <!-- Search form -->
        <div class="relative mx-auto w-full max-w-xs">
          <Input
            :id="id"
            class="peer h-8 px-8"
            placeholder="Search..."
            type="search"
          />
          <div
            class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50"
          >
            <LucideSearch :size="16" />
          </div>
          <button
            class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Press to speak"
            type="submit"
          >
            <LucideMic :size="16" aria-hidden="true" />
          </button>
        </div>
      </div>
      <!-- Right side -->
      <div class="flex flex-1 items-center justify-end gap-2">
        <Button as-child variant="ghost" size="sm" class="text-sm">
          <a href="#">Community</a>
        </Button>
        <Button as-child size="sm" class="text-sm">
          <a href="#">Get Started</a>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
