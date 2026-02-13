<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Separator } from "@/registry/default/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { LucideInfo } from "lucide-vue-next";

const alerts = [
  { name: "Acme Corp", plan: "Enterprise", daysLeft: 3, renewUrl: "#" },
  { name: "Beta LLC", plan: "Pro", daysLeft: 5, renewUrl: "#" },
  { name: "Gamma Inc", plan: "Pro", daysLeft: 7, renewUrl: "#" },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full md:w-[450px]">
      <CardHeader class="flex items-center justify-between">
        <CardTitle>Subscription Alerts</CardTitle>
        <div class="ml-auto">
          <Select defaultValue="this-month">
            <SelectTrigger class="w-32">
              <SelectValue placeholder="Select a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <!-- Stats Row -->
        <div class="mb-4 flex items-center gap-2.5">
          <div class="flex flex-1 flex-col gap-1.5">
            <div class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Total Revenue
            </div>
            <div class="text-foreground text-2xl font-bold">$128,400</div>
          </div>
          <div class="flex flex-1 flex-col gap-1.5">
            <div class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Subscriptions
            </div>
            <div class="text-foreground text-2xl font-bold">312</div>
          </div>
        </div>
        <!-- Segmented Progress Bar -->
        <div
          class="bg-muted mb-3.5 flex h-2.5 w-full items-center gap-0.5 overflow-hidden rounded-full"
        >
          <div class="h-full bg-teal-400" style="width: 60%"></div>
          <div class="bg-destructive h-full" style="width: 30%"></div>
          <div class="h-full bg-amber-400" style="width: 10%"></div>
        </div>
        <!-- Legend -->
        <div class="mb-6 flex items-center gap-5">
          <div class="flex items-center gap-1 text-xs text-teal-600">
            <span class="inline-block size-2 rounded-full bg-teal-400"></span>
            Free
          </div>
          <div class="text-destructive flex items-center gap-1 text-xs">
            <span class="bg-destructive inline-block size-2 rounded-full"></span>
            Pro
          </div>
          <div class="flex items-center gap-1 text-xs text-amber-600">
            <span class="inline-block size-2 rounded-full bg-amber-400"></span>
            Enterprise
            <span class="ms-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <LucideInfo class="text-muted-foreground size-3.5 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Enterprise plans are custom contracts with premium support.</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </div>
        </div>
        <!-- Expiring Soon List -->
        <div class="mb-2.5 flex items-center justify-between">
          <div class="text-muted-foreground text-xs tracking-wide uppercase">Expiring Soon</div>
          <a href="#" class="text-primary text-sm font-medium hover:underline">View all</a>
        </div>
        <div
          v-for="item in alerts"
          :key="item.name"
          class="bg-muted/40 mb-2 flex items-center justify-between rounded-md px-3 py-2.5 last:mb-0"
        >
          <div class="flex items-center gap-2.5">
            <span class="text-foreground text-sm font-medium">
              {{ item.name }}
            </span>
            <Badge size="sm" variant="outline">
              {{ item.plan }}
            </Badge>
          </div>
          <div class="flex items-center gap-2.5">
            <span class="text-muted-foreground text-xs">
              in
              <span class="text-foreground font-semibold">{{ item.daysLeft }}d</span>
            </span>
            <Separator orientation="vertical" class="bg-accent-foreground/20 h-3" />
            <a :href="item.renewUrl" class="text-primary text-xs font-medium hover:underline">
              Renew
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Ported from reui.io subscription alerts card
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
