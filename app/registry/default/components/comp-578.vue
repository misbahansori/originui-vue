<script setup lang="ts">
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-vue-next";

import Logo from "@/registry/default/components/NavbarComponents/Logo.vue";
import { Button } from "@/registry/default/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
  icon?: string;
}

interface NavigationLink {
  href?: string;
  label: string;
  submenu?: boolean;
  type?: "description" | "simple" | "icon";
  items?: NavigationItem[];
}

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks: NavigationLink[] = [
  { href: "#", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        href: "#",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        href: "#",
        label: "Templates",
        description: "Pre-built layouts for common use cases.",
      },
    ],
  },
  {
    label: "Pricing",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Product A" },
      { href: "#", label: "Product B" },
      { href: "#", label: "Product C" },
      { href: "#", label: "Product D" },
    ],
  },
  {
    label: "About",
    submenu: true,
    type: "icon",
    items: [
      { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
      { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
      { href: "#", label: "About Us", icon: "InfoIcon" },
    ],
  },
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
          <PopoverContent align="start" class="w-64 p-1 md:hidden">
            <NavigationMenu class="max-w-none *:w-full">
              <NavigationMenuList class="flex-col items-start gap-0 md:gap-2">
                <NavigationMenuItem
                  v-for="(link, index) in navigationLinks"
                  :key="index"
                  class="w-full"
                >
                  <template v-if="link.submenu">
                    <div
                      class="text-muted-foreground px-2 py-1.5 text-xs font-medium"
                    >
                      {{ link.label }}
                    </div>
                    <ul>
                      <li
                        v-for="(item, itemIndex) in link.items"
                        :key="itemIndex"
                      >
                        <NavigationMenuLink :href="item.href" class="py-1.5">
                          {{ item.label }}
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <NavigationMenuLink :href="link.href" class="py-1.5">
                      {{ link.label }}
                    </NavigationMenuLink>
                  </template>
                  <!-- Add separator between different types of items -->
                  <div
                    v-if="
                      index < navigationLinks.length - 1 &&
                      ((!link.submenu && navigationLinks[index + 1]?.submenu) ||
                        (link.submenu &&
                          !navigationLinks[index + 1]?.submenu) ||
                        (link.submenu &&
                          navigationLinks[index + 1]?.submenu &&
                          link.type !== navigationLinks[index + 1]?.type))
                    "
                    role="separator"
                    aria-orientation="horizontal"
                    class="bg-border -mx-1 my-1 h-px w-full"
                  />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>
        <!-- Main nav -->
        <div class="flex items-center gap-6">
          <a href="#" class="text-primary hover:text-primary/90">
            <Logo />
          </a>
          <!-- Navigation menu -->
          <NavigationMenu :viewport="false" class="max-md:hidden">
            <NavigationMenuList class="gap-2">
              <NavigationMenuItem
                v-for="(link, index) in navigationLinks"
                :key="index"
              >
                <template v-if="link.submenu">
                  <NavigationMenuTrigger
                    class="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5"
                  >
                    {{ link.label }}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    class="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1"
                  >
                    <ul
                      :class="
                        link.type === 'description' ? 'min-w-64' : 'min-w-48'
                      "
                    >
                      <li
                        v-for="(item, itemIndex) in link.items"
                        :key="itemIndex"
                      >
                        <NavigationMenuLink :href="item.href" class="py-1.5">
                          <!-- Display icon if present -->
                          <template v-if="link.type === 'icon' && item.icon">
                            <div class="flex items-center gap-2">
                              <BookOpenIcon
                                v-if="item.icon === 'BookOpenIcon'"
                                :size="16"
                                class="text-foreground opacity-60"
                                aria-hidden="true"
                              />
                              <LifeBuoyIcon
                                v-if="item.icon === 'LifeBuoyIcon'"
                                :size="16"
                                class="text-foreground opacity-60"
                                aria-hidden="true"
                              />
                              <InfoIcon
                                v-if="item.icon === 'InfoIcon'"
                                :size="16"
                                class="text-foreground opacity-60"
                                aria-hidden="true"
                              />
                              <span>{{ item.label }}</span>
                            </div>
                          </template>

                          <!-- Display label with description if present -->
                          <template
                            v-else-if="
                              link.type === 'description' && item.description
                            "
                          >
                            <div class="space-y-1">
                              <div class="font-medium">
                                {{ item.label }}
                              </div>
                              <p
                                class="text-muted-foreground line-clamp-2 text-xs"
                              >
                                {{ item.description }}
                              </p>
                            </div>
                          </template>
                          <template v-else>
                            <!-- Display simple label if not icon or description type -->
                            <span
                              v-if="
                                !link.type ||
                                (link.type !== 'icon' &&
                                  link.type !== 'description')
                              "
                            >
                              {{ item.label }}
                            </span>
                          </template>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </template>
                <template v-else>
                  <NavigationMenuLink
                    :href="link.href"
                    class="text-muted-foreground hover:text-primary py-1.5 font-medium"
                  >
                    {{ link.label }}
                  </NavigationMenuLink>
                </template>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <!-- Right side -->
      <div class="flex items-center gap-2">
        <Button as-child variant="ghost" size="sm" class="text-sm">
          <a href="#">Sign In</a>
        </Button>
        <Button as-child size="sm" class="text-sm">
          <a href="#">Get Started</a>
        </Button>
      </div>
    </div>
  </header>
</template>
