<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  LucideArrowRight,
  LucideChartNoAxesCombined,
  LucideTrendingUp,
  LucideUsers,
} from "lucide-vue-next";

const cards = [
  {
    color: "bg-blue-600",
    icon: LucideChartNoAxesCombined,
    value: "27.3%",
    title: "NPS Improvement",
    desc: "Our new onboarding flow increased Net Promoter Score by 27.3% in Q2.",
    cta: "Read full story",
  },
  {
    color: "bg-emerald-600",
    icon: LucideUsers,
    value: "8,200",
    title: "Active Users",
    desc: "Highest monthly active users since launch. Engagement up 12% MoM.",
    cta: "See user insights",
  },
  {
    color: "bg-fuchsia-700",
    icon: LucideTrendingUp,
    value: "$1.4M",
    title: "ARR Growth",
    desc: "Annual recurring revenue grew by $1.4M in the last quarter.",
    cta: "View ARR breakdown",
  },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="@container w-full grow">
      <div class="grid w-full grid-cols-1 gap-8 @3xl:grid-cols-3">
        <Card
          v-for="(card, i) in cards"
          :key="i"
          :class="cn('overflow-hidden rounded-2xl border-0 p-0 shadow-lg', card.color)"
        >
          <CardContent class="relative flex flex-col justify-end overflow-hidden px-0 py-6 pb-0">
            <div class="mb-3.5 px-6">
              <component :is="card.icon" class="size-8 text-white/60" />
            </div>

            <div class="flex flex-1 flex-col items-start justify-center px-6">
              <div class="mb-6 text-4xl font-bold text-white">
                {{ card.value }}
              </div>
              <div class="mb-1 text-lg font-semibold text-white">
                {{ card.title }}
              </div>
              <div class="mb-2 text-sm text-white/80">{{ card.desc }}</div>
            </div>

            <a
              href="#"
              class="group/card mt-6 flex w-full items-center justify-between bg-black/90 px-6 py-4 dark:bg-zinc-800"
            >
              <span class="text-sm font-medium text-white">{{ card.cta }}</span>
              <LucideArrowRight
                class="h-5 w-5 text-white transition-transform duration-300 group-hover/card:translate-x-1"
              />
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Ported from reui.io statistic showcase cards
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
