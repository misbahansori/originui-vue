<script setup lang="ts">
import { LucideChevronsUpDown } from "lucide-vue-next";

import SettingsMenu from "@/registry/default/components/navbar-components/SettingsMenu.vue";
import UserMenu from "@/registry/default/components/navbar-components/UserMenu.vue";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
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
  SelectValue,
} from "@/registry/default/ui/select";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Docs" },
  { href: "#", label: "API reference" },
];
</script>

<template>
  <header class="border-b px-4 md:px-6">
    <div class="flex h-16 items-center justify-between gap-4">
      <!-- Left side -->
      <div class="flex items-center gap-2">
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
                  <NavigationMenuLink :href="link.href" class="py-1.5">
                    {{ link.label }}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>
        <!-- Breadcrumb -->
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Select default-value="personal">
                <SelectTrigger aria-label="Select account type" as-child>
                  <Button
                    variant="ghost"
                    class="focus-visible:bg-accent text-foreground h-8 p-1.5 focus-visible:ring-0"
                  >
                    <SelectValue placeholder="Select account type" />
                    <LucideChevronsUpDown
                      :size="14"
                      class="text-muted-foreground/80"
                    />
                  </Button>
                </SelectTrigger>
                <SelectContent
                  class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
                >
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <Select default-value="1">
                <SelectTrigger aria-label="Select project" as-child>
                  <Button
                    variant="ghost"
                    class="focus-visible:bg-accent text-foreground h-8 p-1.5 focus-visible:ring-0"
                  >
                    <SelectValue placeholder="Select project" />
                    <LucideChevronsUpDown
                      :size="14"
                      class="text-muted-foreground/80"
                    />
                  </Button>
                </SelectTrigger>
                <SelectContent
                  class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
                >
                  <SelectItem value="1">Main project</SelectItem>
                  <SelectItem value="2">Origin project</SelectItem>
                </SelectContent>
              </Select>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <!-- Right side -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <!-- Nav menu -->
          <NavigationMenu class="max-md:hidden">
            <NavigationMenuList class="gap-2">
              <NavigationMenuItem
                v-for="(link, index) in navigationLinks"
                :key="index"
              >
                <NavigationMenuLink
                  :href="link.href"
                  class="text-muted-foreground hover:text-primary py-1.5 font-medium"
                >
                  {{ link.label }}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <!-- Settings -->
          <SettingsMenu />
        </div>
        <!-- User menu -->
        <UserMenu />
      </div>
    </div>
  </header>
</template>
