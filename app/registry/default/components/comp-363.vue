<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";
</script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <Button
        class="size-auto overflow-hidden rounded-full bg-transparent p-0 hover:bg-transparent"
        aria-label="My profile"
        as-child
      >
        <a href="#">
          <img src="/avatar-40-04.jpg" width="40" height="40" alt="Avatar" />
        </a>
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-[340px]">
      <div class="flex items-start gap-3">
        <img
          class="shrink-0 rounded-full"
          src="/avatar-40-04.jpg"
          width="40"
          height="40"
          alt="Avatar"
        />
        <div class="space-y-1">
          <p class="text-sm font-medium">@Origin_UI</p>
          <p class="text-muted-foreground text-sm">
            Beautiful UI components built with Tailwind CSS and Next.js.
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
