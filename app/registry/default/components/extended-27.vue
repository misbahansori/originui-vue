<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/registry/default/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Progress } from "@/registry/default/ui/progress";
import { Separator } from "@/registry/default/ui/separator";
import {
  LucideCheckCircle,
  LucideMoreHorizontal,
  LucidePin,
  LucideSettings,
  LucideShare2,
  LucideTrash,
  LucideTrendingDown,
  LucideTrendingUp,
  LucideTriangleAlert,
} from "lucide-vue-next";

const performance = [
  {
    label: "Deals Closed",
    value: 27,
    trend: 12,
    trendDir: "up",
  },
  {
    label: "Revenue",
    value: "$182.4k",
    trend: 6,
    trendDir: "up",
  },
  {
    label: "Conversion",
    value: "72%",
    trend: 3,
    trendDir: "down",
  },
];

const pipelineProgress = 76;

const activity = [
  {
    text: "Closed deal with FinSight Inc.",
    date: "Today",
    state: "secondary",
    color: "text-green-500",
  },
  {
    text: "3 new leads added to Pipeline.",
    date: "Yesterday",
    state: "secondary",
    color: "text-green-500",
  },
  {
    text: "Follow-up scheduled.",
    date: "2 days ago",
    state: "destructive",
    color: "text-destructive",
  },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full md:w-96">
      <CardHeader class="flex items-center justify-between">
        <CardTitle class="flex flex-col gap-1">
          <span>Staff Performance</span>
          <span class="text-muted-foreground text-xs font-normal">Sales Manager</span>
        </CardTitle>
        <div class="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
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
      <CardContent class="space-y-5">
        <div>
          <div class="text-accent-foreground mb-2.5 text-sm font-medium">Q3 Performance</div>
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="item in performance"
              :key="item.label"
              class="flex flex-col items-start justify-start"
            >
              <div class="text-foreground text-xl font-bold">
                {{ item.value }}
              </div>
              <div class="text-muted-foreground mb-1 text-xs font-medium">
                {{ item.label }}
              </div>

              <span
                :class="
                  cn(
                    'flex items-center gap-0.5 text-xs font-semibold',
                    item.trendDir === 'up' ? 'text-green-500' : 'text-destructive',
                  )
                "
              >
                <LucideTrendingUp v-if="item.trendDir === 'up'" class="h-3 w-3" />
                <LucideTrendingDown v-else class="h-3 w-3" />
                {{ item.trendDir === "up" ? "+" : "-" }}{{ item.trend }}%
              </span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <div class="mb-2.5 flex items-center justify-between">
            <span class="text-foreground text-sm font-medium">Pipeline Progress</span>
            <span class="text-foreground text-xs font-semibold">{{ pipelineProgress }}%</span>
          </div>
          <Progress :modelValue="pipelineProgress" class="bg-muted" />
        </div>

        <Separator />

        <div>
          <div class="text-foreground mb-2.5 text-sm font-medium">Recent Activity</div>
          <ul class="space-y-2">
            <li
              v-for="(a, i) in activity"
              :key="i"
              class="flex items-center justify-between gap-2.5 text-sm"
            >
              <span class="flex items-center gap-2">
                <LucideCheckCircle :class="cn('h-3.5 w-3.5', a.color)" />
                <span class="text-foreground truncate text-xs">
                  {{ a.text }}
                </span>
              </span>
              <Badge :variant="a.state === 'secondary' ? 'secondary' : 'destructive'" size="sm">
                {{ a.date }}
              </Badge>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter class="flex h-auto gap-2.5">
        <Button variant="outline" class="flex-1">Schedule</Button>
        <Button variant="default" class="flex-1">Full Report</Button>
      </CardFooter>
    </Card>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Ported from reui.io staff performance card
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
