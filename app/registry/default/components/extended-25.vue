<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { LucideInfo } from "lucide-vue-next";

const leadsData = {
  newLeads: 54,
  returningLeads: 198,
  newPercent: 21.43,
  returningPercent: 78.57,
  topSource: "LinkedIn",
  conversionRate: 12.8,
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full md:w-[450px]">
      <CardHeader class="flex items-center justify-between">
        <CardTitle>Leads Overview</CardTitle>
        <div class="ml-auto">
          <Select defaultValue="this-month">
            <SelectTrigger class="w-32">
              <SelectValue placeholder="Select range" />
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
        <div class="mb-4 flex items-stretch gap-x-6">
          <!-- New Leads -->
          <div class="flex flex-1 flex-col items-start gap-1">
            <div class="mb-1 flex items-center gap-1">
              <span class="text-foreground text-2xl font-bold">
                {{ leadsData.newLeads }}
              </span>
              <Badge size="sm" variant="default">{{ leadsData.newPercent }}%</Badge>
            </div>
            <span class="text-muted-foreground text-sm font-medium">New leads</span>
            <!-- Solid Progress Bar -->
            <div class="mt-1 w-full">
              <div class="bg-muted h-2.5 overflow-hidden rounded-xs">
                <div
                  class="bg-primary h-full rounded-xs transition-all"
                  :style="{ width: `${leadsData.newPercent}%` }"
                ></div>
              </div>
            </div>
          </div>
          <!-- Returning Leads -->
          <div
            class="border-muted-foreground/10 flex flex-1 flex-col items-start gap-1 border-s ps-6"
          >
            <div class="mb-1 flex items-center gap-1">
              <span class="text-foreground text-2xl font-bold">
                {{ leadsData.returningLeads }}
              </span>
            </div>
            <span class="text-muted-foreground text-sm font-medium">Returning leads</span>
            <!-- Dotted Bar -->
            <div class="mt-1 flex w-full gap-0.5">
              <div
                v-for="i in 30"
                :key="i - 1"
                :class="
                  cn(
                    'h-2.5 w-0.5 flex-1 rounded-full',
                    i - 1 < Math.round((leadsData.returningPercent / 100) * 30)
                      ? 'bg-green-500'
                      : 'bg-muted',
                  )
                "
              ></div>
            </div>
          </div>
        </div>

        <!-- Extra Details -->
        <div class="mb-1.5 flex items-center gap-x-4">
          <div class="flex flex-1 flex-col gap-0.5">
            <span class="text-muted-foreground text-xs">Top Source</span>
            <span class="text-foreground text-sm font-medium">
              {{ leadsData.topSource }}
            </span>
          </div>
          <div class="flex flex-1 flex-col gap-0.5 ps-7.5">
            <span class="text-muted-foreground flex items-center gap-1 text-xs">
              Conversion Rate
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <LucideInfo class="text-muted-foreground size-3.5 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Percentage of leads converted to customers.</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            <span class="text-foreground text-sm font-medium">{{ leadsData.conversionRate }}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Ported from reui.io leads overview card
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
