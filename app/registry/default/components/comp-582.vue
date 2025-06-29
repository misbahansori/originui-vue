<script setup lang="ts">
import {
  LucideFileText,
  LucideGlobe,
  LucideHome,
  LucideLayers,
  LucideUsers,
} from "lucide-vue-next";
import { useId } from "vue";

import Logo from "@/registry/default/components/navbar-components/Logo.vue";
import ThemeToggle from "@/registry/default/components/navbar-components/ThemeToggle.vue";
import UserMenu from "@/registry/default/components/navbar-components/UserMenu.vue";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

// Navigation links with icons for desktop icon-only navigation
const navigationLinks = [
  { href: "#", label: "Dashboard", icon: LucideHome, active: true },
  { href: "#", label: "Projects", icon: LucideLayers },
  { href: "#", label: "Documentation", icon: LucideFileText },
  { href: "#", label: "Team", icon: LucideUsers },
];

// Language options
const languages = [
  { value: "en", label: "En" },
  { value: "es", label: "Es" },
  { value: "fr", label: "Fr" },
  { value: "de", label: "De" },
  { value: "ja", label: "Ja" },
];

const id = useId();
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
                      class="text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span>{{ link.label }}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>
        <div class="flex items-center gap-6">
          <!-- Logo -->
          <a href="#" class="text-primary hover:text-primary/90">
            <Logo />
          </a>
          <!-- Desktop navigation - icon only -->
          <NavigationMenu class="hidden md:flex">
            <NavigationMenuList class="gap-2">
              <TooltipProvider>
                <NavigationMenuItem
                  v-for="link in navigationLinks"
                  :key="link.label"
                >
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <NavigationMenuLink
                        :href="link.href"
                        class="flex size-8 items-center justify-center p-1.5"
                      >
                        <component
                          :is="link.icon"
                          :size="20"
                          aria-hidden="true"
                        />
                        <span class="sr-only">{{ link.label }}</span>
                      </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" class="px-2 py-1 text-xs">
                      <p>{{ link.label }}</p>
                    </TooltipContent>
                  </Tooltip>
                </NavigationMenuItem>
              </TooltipProvider>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <!-- Right side -->
      <div class="flex items-center gap-2">
        <!-- Theme toggle -->
        <ThemeToggle />
        <!-- Language selector -->
        <Select default-value="en">
          <SelectTrigger
            :id="`language-${id}`"
            class="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none [&>svg]:shrink-0"
            aria-label="Select language"
          >
            <LucideGlobe :size="16" aria-hidden="true" />
            <SelectValue class="hidden sm:inline-flex" />
          </SelectTrigger>
          <SelectContent
            class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2"
          >
            <SelectItem
              v-for="lang in languages"
              :key="lang.value"
              :value="lang.value"
            >
              <span class="flex items-center gap-2">
                <span class="truncate">{{ lang.label }}</span>
              </span>
            </SelectItem>
          </SelectContent>
        </Select>
        <!-- User menu -->
        <UserMenu />
      </div>
    </div>
  </header>
</template>
