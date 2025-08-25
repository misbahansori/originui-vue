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
    title: "Total Sales",
    value: 892200000,
    delta: 0.2,
    lastMonth: 889100000,
    positive: true,
    prefix: "$",
    suffix: "M",
    format: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
    lastFormat: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
    bg: "bg-zinc-950",
    svg: "total-sales",
  },
  {
    title: "New Customers",
    value: 12800,
    delta: 3.1,
    lastMonth: 12400,
    positive: true,
    prefix: "",
    suffix: "",
    bg: "bg-fuchsia-600",
    svg: "new-customers",
  },
  {
    title: "Refunds",
    value: 320,
    delta: -1.2,
    lastMonth: 340,
    positive: false,
    prefix: "",
    suffix: "",
    bg: "bg-blue-600",
    svg: "refunds",
  },
  {
    title: "Churn Rate",
    value: 2.3,
    delta: -0.1,
    lastMonth: 2.4,
    positive: false,
    prefix: "",
    suffix: "%",
    bg: "bg-teal-600",
    svg: "churn-rate",
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
      <Card
        v-for="(stat, index) in stats"
        :key="index"
        :class="`relative overflow-hidden ${stat.bg} text-white`"
      >
        <!-- SVG Background Decorations -->
        <div
          class="pointer-events-none absolute top-0 right-0 h-full w-2/3 opacity-40"
        >
          <!-- Total Sales SVG -->
          <svg
            v-if="stat.svg === 'total-sales'"
            class="h-full w-full"
            viewBox="0 0 300 200"
            fill="none"
          >
            <circle cx="220" cy="100" r="90" fill="#fff" fill-opacity="0.08" />
            <circle cx="260" cy="60" r="60" fill="#fff" fill-opacity="0.10" />
            <circle cx="200" cy="160" r="50" fill="#fff" fill-opacity="0.07" />
            <circle cx="270" cy="150" r="30" fill="#fff" fill-opacity="0.12" />
          </svg>

          <!-- New Customers SVG -->
          <svg
            v-if="stat.svg === 'new-customers'"
            class="h-full w-full"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>
            <ellipse
              cx="170"
              cy="60"
              rx="40"
              ry="18"
              fill="#fff"
              fill-opacity="0.13"
              filter="url(#blur2)"
            />
            <rect
              x="120"
              y="20"
              width="60"
              height="20"
              rx="8"
              fill="#fff"
              fill-opacity="0.10"
            />
            <polygon
              points="150,0 200,0 200,50"
              fill="#fff"
              fill-opacity="0.07"
            />
            <circle cx="180" cy="100" r="14" fill="#fff" fill-opacity="0.16" />
          </svg>

          <!-- Refunds SVG -->
          <svg
            v-if="stat.svg === 'refunds'"
            class="h-full w-full"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <filter id="blur3" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="12" />
              </filter>
            </defs>
            <rect
              x="120"
              y="0"
              width="70"
              height="70"
              rx="35"
              fill="#fff"
              fill-opacity="0.09"
              filter="url(#blur3)"
            />
            <ellipse
              cx="170"
              cy="80"
              rx="28"
              ry="12"
              fill="#fff"
              fill-opacity="0.12"
            />
            <polygon
              points="200,0 200,60 140,0"
              fill="#fff"
              fill-opacity="0.07"
            />
            <circle cx="150" cy="30" r="10" fill="#fff" fill-opacity="0.15" />
          </svg>

          <!-- Churn Rate SVG -->
          <svg
            v-if="stat.svg === 'churn-rate'"
            class="h-full w-full"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <filter id="blur4" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>
            <polygon
              points="200,0 200,100 100,0"
              fill="#fff"
              fill-opacity="0.09"
            />
            <ellipse
              cx="170"
              cy="40"
              rx="30"
              ry="18"
              fill="#fff"
              fill-opacity="0.13"
              filter="url(#blur4)"
            />
            <rect
              x="140"
              y="60"
              width="40"
              height="18"
              rx="8"
              fill="#fff"
              fill-opacity="0.10"
            />
            <circle cx="150" cy="30" r="14" fill="#fff" fill-opacity="0.18" />
            <line
              x1="120"
              y1="0"
              x2="200"
              y2="80"
              stroke="#fff"
              stroke-opacity="0.08"
              stroke-width="6"
            />
          </svg>
        </div>

        <CardHeader
          class="relative z-10 flex items-center justify-between border-0"
        >
          <CardTitle class="text-sm font-medium text-white/90">
            {{ stat.title }}
          </CardTitle>
          <div class="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button
                  variant="ghost"
                  size="sm"
                  mode="icon"
                  class="-me-1.5 text-white/80 hover:text-white"
                >
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
        <CardContent class="relative z-10 space-y-2.5">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl font-semibold tracking-tight">
              {{
                stat.format
                  ? stat.format(stat.value)
                  : stat.prefix + formatNumber(stat.value) + stat.suffix
              }}
            </span>
            <Badge class="bg-white/20 font-semibold">
              <LucideArrowUp v-if="stat.delta > 0" class="size-4" />
              <LucideArrowDown v-else class="size-4" />
              {{ stat.delta }}%
            </Badge>
          </div>
          <div
            class="mt-2 border-t border-white/20 pt-2.5 text-xs text-white/80"
          >
            Vs last month:
            <span class="font-medium text-white">
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
      Ported from reui.io colored statistic cards
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
