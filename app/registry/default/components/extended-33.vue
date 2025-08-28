<script setup lang="ts">
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
  LucideMoreVertical,
  LucidePin,
  LucideSettings,
  LucideShare2,
  LucideShieldCheck,
  LucideTriangleAlert,
} from "lucide-vue-next";
import { ref } from "vue";

const bars = [6, 6, 5, 5, 4, 4, 3, 0];
const maxBars = Math.max(...bars);

const barInsights = [
  {
    date: "24 Feb 2025",
    growth: 8.2,
    direction: "up",
    note: "Feature launch week. Strong adoption spike.",
  },
  {
    date: "08 Mar 2025",
    growth: 7.5,
    direction: "up",
    note: "Onboarding improvements led to a 7.5% boost in adoption.",
  },
  {
    date: "15 Mar 2025",
    growth: 2.1,
    direction: "up",
    note: "Steady growth as more teams enabled the feature.",
  },
  {
    date: "22 Apr 2025",
    growth: 0.0,
    direction: "neutral",
    note: "Temporary plateau after a minor bug was reported.",
  },
  {
    date: "29 May 2025",
    growth: 0.0,
    direction: "neutral",
    note: "Seasonal dip, many users on vacation.",
  },
  {
    date: "06 Jun 2025",
    growth: 0.0,
    direction: "neutral",
    note: "No significant change, awaiting next release.",
  },
  {
    date: "13 Jul 2025",
    growth: 1.4,
    direction: "up",
    note: "Beta feature feedback positive, slight increase.",
  },
  {
    date: "20 Jul 2025",
    growth: 0.0,
    direction: "neutral",
    note: "Stable week, engagement holding steady.",
  },
] as const;

const barRefs = ref<(HTMLDivElement | null)[]>([]);

function getBarColor(direction: string, j: number, height: number) {
  if (height === 0) return "bg-muted";

  // Even color progression from intense to neutral
  const barColors = [
    "bg-indigo-600",
    "bg-indigo-500",
    "bg-indigo-400",
    "bg-indigo-300",
    "bg-indigo-200",
    "bg-indigo-100",
  ];
  return j < height ? barColors[j] : "bg-muted";
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full max-w-sm">
      <CardHeader class="flex min-h-auto items-center justify-between border-0">
        <CardTitle class="flex flex-col items-start gap-0.5">
          <div class="text-foreground text-lg leading-none font-semibold">
            Feature Adoption
          </div>
          <div class="text-muted-foreground text-sm font-medium">
            Best adoption report
          </div>
        </CardTitle>
        <div class="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon" class="-me-1.5">
                <LucideMoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuItem>
                <LucideSettings />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LucideTriangleAlert />
                Export Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LucidePin />
                Configure Alerts
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LucideShare2 />
                Run Manual Check
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LucideShieldCheck />
                View History
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent class="space-y-5">
        <div class="text-foreground text-5xl font-bold">84%</div>

        <div class="relative mt-2 flex h-32 w-full items-end gap-2">
          <div
            v-for="(height, i) in bars"
            :key="i"
            :ref="
              (el) => {
                barRefs[i] = el as HTMLDivElement | null;
              }
            "
            class="flex min-w-0 flex-1 cursor-pointer flex-col justify-end transition-all"
          >
            <div
              v-for="j in maxBars"
              :key="j - 1"
              :class="`my-0.5 h-3 rounded ${getBarColor(barInsights.at(i)?.direction ?? 'neutral', j - 1, height)}`"
            />
          </div>
        </div>
      </CardContent>
    </Card>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io feature adoption card
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
