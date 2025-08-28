<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideBarChart2, LucideMoreHorizontal } from "lucide-vue-next";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full max-w-md">
      <CardHeader class="flex min-h-auto items-center justify-between border-0">
        <CardTitle class="inline-flex items-center gap-2">
          <LucideBarChart2 class="text-primary size-8" />
          Total Revenue
        </CardTitle>
        <div class="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
                <LucideMoreHorizontal class="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Export Data</DropdownMenuItem>
              <DropdownMenuItem>Pin to Dashboard</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent class="flex flex-col justify-between gap-3.5">
        <div class="space-y-3.5">
          <div class="mb-2.5 flex items-center gap-2.5">
            <span class="text-foreground text-3xl font-bold tracking-tight">
              $ 1,120,500
            </span>
            <span
              class="text-muted-foreground text-xs leading-none font-medium"
            >
              USD
            </span>
          </div>

          <div class="mb-4 flex items-center gap-2">
            <Badge variant="destructive">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                class="inline-block"
              >
                <path
                  d="M3 5.5L7 9.5L11 5.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              -12.7%
            </Badge>
            <span class="text-muted-foreground text-sm">
              decreased from last quarter
            </span>
          </div>
        </div>

        <div class="space-y-1">
          <div
            class="bg-muted/60 flex items-center justify-between rounded-lg p-2.5"
          >
            <span class="text-accent-foreground text-sm">
              Avg. Subscription Value:
            </span>
            <span class="text-foreground text-base font-semibold">$320</span>
          </div>
          <div
            class="bg-muted/60 flex items-center justify-between rounded-lg p-2.5"
          >
            <span class="text-accent-foreground text-sm">
              Enterprise Clients:
            </span>
            <span class="text-foreground text-base font-semibold">42</span>
          </div>
        </div>
      </CardContent>
    </Card>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io total revenue card
      <a
        class="hover:text-foreground underline"
        href="https://reui.io/blocks/cards"
        target="_blank"
        rel="noopener nofollow"
      >
        reui.io
      </a>
    </p>
  </div>
</template>
