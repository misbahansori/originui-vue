<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <header class="flex items-center justify-between py-6">
    <div class="flex items-center gap-8">
      <NuxtLink to="/" class="text-lg font-semibold">Origin UI</NuxtLink>
      <nav class="hidden md:flex">
        <ul class="flex gap-6">
          <li>
            <NuxtLink
              to="/docs"
              class="text-muted-foreground hover:text-foreground"
            >
              Docs
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/components"
              class="text-muted-foreground hover:text-foreground"
            >
              Components
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/examples"
              class="text-muted-foreground hover:text-foreground"
            >
              Examples
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center gap-4">
      <a
        href="https://github.com/originui/originui"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted-foreground hover:text-foreground"
      >
        <span class="sr-only">GitHub</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
      </a>
      <Button variant="outline" size="sm">Theme</Button>
    </div>
  </header>
</template>
