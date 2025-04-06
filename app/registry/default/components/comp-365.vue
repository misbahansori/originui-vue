<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card";
</script>

<template>
  <div class="max-w-md text-sm">
    <HoverCard>
      <HoverCardTrigger as-child>
        <a class="flex size-16 overflow-hidden rounded-md" href="#">
          <img
            class="h-full w-full object-cover"
            src="/dialog-content.png"
            width="382"
            height="216"
            alt="Content image"
          />
        </a>
      </HoverCardTrigger>
      <HoverCardContent class="w-[320px]" show-arrow>
        <div class="space-y-3">
          <div class="space-y-1">
            <h2 class="font-semibold">
              Building a Design System with Next.js and Tailwind CSS
            </h2>
            <p class="text-muted-foreground text-sm">
              Learn how to build a comprehensive design system using Tailwind
              CSS, including component architecture, and theme customization.
            </p>
          </div>
          <div class="text-muted-foreground flex items-center gap-2 text-xs">
            <span>8 min read</span>
            <span>·</span>
            <span>Updated 2 days ago</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
