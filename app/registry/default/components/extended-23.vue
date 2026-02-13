<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  LucideBriefcase,
  LucideShoppingCart,
  LucideTrendingDown,
  LucideTrendingUp,
  LucideUsers,
} from "lucide-vue-next";

const cards = [
  {
    icon: LucideBriefcase,
    iconColor: "text-green-600",
    title: "Active Projects",
    badge: {
      color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
      icon: LucideTrendingUp,
      iconColor: "text-green-500",
      text: "+12.8%",
    },
    value: 17,
    dateRange: "From Jan 01 - Jul 30, 2024",
  },
  {
    icon: LucideShoppingCart,
    iconColor: "text-blue-600",
    title: "Orders Processed",
    badge: {
      color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
      icon: LucideTrendingUp,
      iconColor: "text-blue-500",
      text: "+3.7%",
    },
    value: 3421,
    dateRange: "From Jan 01 - Jul 30, 2024",
  },
  {
    icon: LucideUsers,
    iconColor: "text-pink-600",
    title: "Churned Users",
    badge: {
      color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
      icon: LucideTrendingDown,
      iconColor: "text-pink-500",
      text: "-2.1%",
    },
    value: 89,
    dateRange: "From Jan 01 - Jul 30, 2024",
  },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="@container w-full grow">
      <div class="grid grid-cols-1 gap-6 @3xl:grid-cols-3">
        <Card v-for="(card, i) in cards" :key="i" class="py-4">
          <CardContent class="flex h-full flex-col">
            <div class="mb-4 flex items-center justify-between">
              <component :is="card.icon" :class="cn('size-6', card.iconColor)" />

              <Badge :class="cn('rounded-full px-2 py-1', card.badge.color)">
                <component :is="card.badge.icon" :class="`h-3 w-3 ${card.badge.iconColor}`" />
                {{ card.badge.text }}
              </Badge>
            </div>

            <div class="flex flex-1 grow flex-col justify-between">
              <div>
                <div class="text-muted-foreground mb-1 text-xs font-medium">
                  {{ card.title }}
                </div>
                <div class="text-foreground mb-2 text-2xl font-bold">
                  {{ card.value.toLocaleString() }}
                </div>
              </div>
              <div class="border-muted text-muted-foreground border-t pt-3 text-xs font-medium">
                {{ card.dateRange }}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Ported from reui.io icon statistic cards
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
