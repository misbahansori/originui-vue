<script setup lang="ts">
import {
  LucideHome,
  LucideInbox,
  LucideSparkles,
  LucideZap,
} from "lucide-vue-next";

import Logo from "@/registry/default/components/NavbarComponents/Logo.vue";
import UserMenu from "@/registry/default/components/NavbarComponents/UserMenu.vue";
import { Button } from "@/registry/default/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/registry/default/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

// Navigation links array
const navigationLinks = [
  { href: "#", label: "Home", icon: LucideHome, active: true },
  { href: "#", label: "Inbox", icon: LucideInbox },
  { href: "#", label: "Insights", icon: LucideZap },
];
</script>

<template>
  <header class="border-b px-4 md:px-6">
    <div class="flex h-16 items-center justify-between gap-4">
      <!-- Left side -->
      <div class="flex flex-1 items-center gap-2">
        <!-- Mobile menu trigger -->
        <Popover>
          <PopoverTrigger as-child>
            <Button class="group size-8 md:hidden" variant="ghost" size="icon">
              <svg
                class="pointer-events-none"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  class="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  class="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" class="w-36 p-1 md:hidden">
            <NavigationMenu class="max-w-none *:w-full">
              <NavigationMenuList class="flex-col items-start gap-0 md:gap-2">
                <NavigationMenuItem
                  v-for="(link, index) in navigationLinks"
                  :key="index"
                  class="w-full"
                >
                  <NavigationMenuLink
                    :href="link.href"
                    class="flex-row items-center gap-2 py-1.5"
                    :active="link.active"
                  >
                    <component
                      :is="link.icon"
                      :size="16"
                      class="text-muted-foreground/80"
                      aria-hidden="true"
                    />
                    <span>{{ link.label }}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>

        <NavigationMenu class="max-md:hidden">
          <NavigationMenuList class="gap-2">
            <NavigationMenuItem
              v-for="(link, index) in navigationLinks"
              :key="index"
            >
              <NavigationMenuLink
                :active="link.active"
                :href="link.href"
                class="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
              >
                <component
                  :is="link.icon"
                  :size="16"
                  class="text-muted-foreground/80"
                  aria-hidden="true"
                />
                <span>{{ link.label }}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Middle side: Logo -->
      <div class="flex items-center">
        <a href="#" class="text-primary hover:text-primary/90">
          <Logo />
        </a>
      </div>

      <!-- Right side: Actions -->
      <div class="flex flex-1 items-center justify-end gap-4">
        <!-- User menu -->
        <UserMenu />
        <!-- Upgrade button -->
        <Button size="sm" class="aspect-square text-sm">
          <LucideSparkles
            class="opacity-60 max-sm:hidden sm:-ms-1"
            :size="16"
            aria-hidden="true"
          />
          Upgrade
        </Button>
      </div>
    </div>
  </header>
</template>
