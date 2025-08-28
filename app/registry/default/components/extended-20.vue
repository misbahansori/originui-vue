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
import {
  LucideArrowDown,
  LucideArrowUp,
  LucideMoreHorizontal,
  LucidePin,
  LucideSettings,
  LucideShare2,
  LucideTrash,
  LucideTriangleAlert,
} from "lucide-vue-next";

const stats = [
  {
    title: "All Orders",
    value: 122380,
    delta: 15.1,
    lastMonth: 105922,
    positive: true,
    prefix: "",
    suffix: "",
  },
  {
    title: "Order Created",
    value: 1902380,
    delta: -2.0,
    lastMonth: 2002098,
    positive: false,
    prefix: "",
    suffix: "",
  },
  {
    title: "Organic Sales",
    value: 98100000,
    delta: 0.4,
    lastMonth: 97800000,
    positive: true,
    prefix: "$",
    suffix: "M",
    format: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
    lastFormat: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
  },
  {
    title: "Active Users",
    value: 48210,
    delta: 3.7,
    lastMonth: 46480,
    positive: true,
    prefix: "",
    suffix: "",
  },
];

function formatNumber(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="grid grow grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card v-for="(stat, index) in stats" :key="index" class="py-4">
        <CardHeader class="flex items-center justify-between border-0">
          <CardTitle class="text-muted-foreground text-sm font-medium">
            {{ stat.title }}
          </CardTitle>
          <div class="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" class="-me-1.5">
                  <LucideMoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="bottom">
                <DropdownMenuItem>
                  <LucideSettings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LucideTriangleAlert />
                  Add Alert
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LucidePin />
                  Pin to Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LucideShare2 />
                  Share
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LucideTrash />
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent class="space-y-2.5">
          <div class="flex items-center gap-2.5">
            <span class="text-foreground text-2xl font-medium tracking-tight">
              {{
                stat.format
                  ? stat.format(stat.value)
                  : stat.prefix + formatNumber(stat.value) + stat.suffix
              }}
            </span>
            <Badge :variant="stat.positive ? 'default' : 'destructive'">
              <LucideArrowUp v-if="stat.delta > 0" class="size-4" />
              <LucideArrowDown v-else class="size-4" />
              {{ stat.delta }}%
            </Badge>
          </div>
          <div class="text-muted-foreground mt-2 border-t pt-2.5 text-xs">
            Vs last month:
            <span class="text-foreground font-medium">
              {{
                stat.lastFormat
                  ? stat.lastFormat(stat.lastMonth)
                  : stat.prefix + formatNumber(stat.lastMonth) + stat.suffix
              }}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io statistic cards
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
