<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  LucideCheckCircle2,
  LucideLifeBuoy,
  LucideSmile,
} from "lucide-vue-next";

const cards = [
  {
    icon: LucideLifeBuoy,
    iconBg:
      "border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400",
    value: 320,
    label: "Support Tickets",
    info: {
      variant: "secondary",
      text: "12 Open, 308 Closed",
    },
  },
  {
    icon: LucideCheckCircle2,
    iconBg:
      "border-green-200 dark:border-green-800 text-green-600 dark:text-green-400",
    value: "98%",
    label: "Resolved",
    info: {
      variant: "default",
      text: "+2.1% this month",
    },
  },
  {
    icon: LucideSmile,
    iconBg:
      "border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400",
    value: "4.8",
    label: "Satisfaction Rate",
    info: {
      variant: "secondary",
      text: "Avg. (out of 5)",
    },
  },
] as const;
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="@container w-full grow">
      <div class="grid max-w-5xl grow grid-cols-1 gap-5 @3xl:grid-cols-3">
        <Card v-for="(card, i) in cards" :key="i" class="py-4">
          <CardContent class="flex flex-col items-start gap-4 px-4">
            <div
              :class="
                cn(
                  'flex size-12 items-center justify-center rounded-xl border',
                  card.iconBg,
                )
              "
            >
              <component :is="card.icon" class="size-6" />
            </div>
            <div class="space-y-0.5">
              <div class="text-foreground text-2xl leading-none font-bold">
                {{ card.value }}
              </div>
              <div class="text-muted-foreground text-sm">{{ card.label }}</div>
            </div>

            <Badge :variant="card.info.variant">
              {{ card.info.text }}
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io support metrics cards
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
