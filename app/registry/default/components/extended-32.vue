<script setup lang="ts">
import { cn } from "@/lib/utils";
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

const total = 30;
const passing = 20;
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full max-w-sm">
      <CardHeader
        class="flex min-h-auto items-center justify-between border-0 py-5"
      >
        <CardTitle class="flex items-center gap-2.5">
          <LucideShieldCheck class="text-primary h-5 w-5" />
          <span class="text-foreground text-sm font-semibold">
            Compliance Checks
          </span>
        </CardTitle>
        <div class="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="sm" mode="icon" class="-me-1.5">
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

      <CardContent class="space-y-2.5">
        <!-- Progress Bar -->
        <div class="flex grow gap-1">
          <span
            v-for="i in total"
            :key="i - 1"
            :class="
              cn(
                'inline-block h-4 w-3 rounded-sm border transition-colors',
                i - 1 < passing
                  ? 'border-primary bg-primary'
                  : 'border-muted bg-muted',
              )
            "
          />
        </div>

        <!-- Passing Checks -->
        <div
          class="text-muted-foreground mt-1 flex items-center justify-between text-xs"
        >
          <span>{{ passing }}/16 checks passing</span>
          <span class="text-foreground font-semibold">
            {{ Math.round((passing / total) * 100) }}% assigned
          </span>
        </div>
      </CardContent>
    </Card>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io compliance checks card
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
