<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  LucideArrowUpRight,
  LucideTrendingDown,
  LucideUserPlus,
} from "lucide-vue-next";

const cards = [
  {
    title: "Total Sales & Cost",
    subtitle: "Last 60 days",
    value: "$956.82k",
    valueColor: "text-green-600",
    badge: {
      color:
        "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
      icon: LucideArrowUpRight,
      iconColor: "text-green-500",
      text: "+5.4%",
    },
    subtext: {
      value: "+8.20k",
      label: "vs prev. 60 days",
      color: "text-green-600",
    },
  },
  {
    title: "New Customers",
    subtitle: "This quarter",
    value: "1,245",
    valueColor: "text-blue-600",
    badge: {
      color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
      icon: LucideUserPlus,
      iconColor: "text-blue-500",
      text: "+3.2%",
    },
    subtext: {
      value: "+39",
      label: "vs last quarter",
      color: "text-blue-600",
    },
  },
  {
    title: "Churn Rate",
    subtitle: "Last 30 days",
    value: "2.8%",
    valueColor: "text-red-500",
    badge: {
      color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
      icon: LucideTrendingDown,
      iconColor: "text-red-500",
      text: "-1.1%",
    },
    subtext: {
      value: "-0.3%",
      label: "vs prev. 30 days",
      color: "text-red-500",
    },
  },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="@container w-full grow">
      <div
        class="bg-background border-border grid grid-cols-1 overflow-hidden rounded-xl border @3xl:grid-cols-3"
      >
        <Card
          v-for="(card, i) in cards"
          :key="i"
          class="border-border rounded-none border-0 border-y py-4 shadow-none first:border-0 last:border-0 @3xl:border-x @3xl:border-y-0"
        >
          <CardContent class="flex h-full flex-col justify-between space-y-6">
            <div class="space-y-0.25">
              <div class="text-foreground text-base font-semibold">
                {{ card.title }}
              </div>
              <div class="text-muted-foreground text-xs">
                {{ card.subtitle }}
              </div>
            </div>

            <div class="flex flex-1 grow flex-col justify-between gap-1.5">
              <div class="flex items-center gap-2">
                <span
                  :class="`text-2xl font-bold tracking-tight ${card.valueColor}`"
                >
                  {{ card.value }}
                </span>
                <Badge
                  :class="`${card.badge.color} flex items-center gap-1 rounded-full py-0.5 text-xs font-medium shadow-none`"
                >
                  <component
                    :is="card.badge.icon"
                    :class="`h-3 w-3 ${card.badge.iconColor}`"
                  />
                  {{ card.badge.text }}
                </Badge>
              </div>
              <div class="text-xs">
                <span :class="`${card.subtext.color} font-medium`">
                  {{ card.subtext.value }}
                </span>
                <span class="text-muted-foreground font-normal">
                  {{ card.subtext.label }}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io connected statistic cards
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
