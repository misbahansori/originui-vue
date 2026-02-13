<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card";
import { LucideBanknoteArrowUp } from "lucide-vue-next";

const balanceData = {
  balance: 10976.95,
  delta: 5.7,
  currencies: [
    { code: "USD", percent: 30, color: "bg-white" },
    { code: "GBP", percent: 20, color: "bg-indigo-400" },
    { code: "EUR", percent: 15, color: "bg-blue-500" },
    { code: "JPY", percent: 20, color: "bg-violet-600" },
    { code: "CNY", percent: 15, color: "bg-fuchsia-600" },
  ],
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full max-w-xl rounded-2xl border-0 bg-zinc-900 text-white shadow-xl">
      <CardHeader class="flex items-center justify-between">
        <CardTitle class="text-lg font-semibold text-zinc-400">Balance</CardTitle>
        <div class="ml-auto">
          <Button
            class="border-zinc-800 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-zinc-100"
          >
            <LucideBanknoteArrowUp />
            Topup
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="mb-5 flex items-end gap-2">
          <span class="text-3xl font-bold tracking-tight text-white">
            ${{ balanceData.balance.toLocaleString() }}
          </span>
          <span class="ms-2 text-base font-semibold text-green-400">+{{ balanceData.delta }}%</span>
        </div>

        <div class="mb-6 border-b border-zinc-700"></div>

        <!-- Segmented Progress Bar -->
        <div class="mb-3 flex w-full items-center gap-1.5">
          <div
            v-for="cur in balanceData.currencies"
            :key="cur.code"
            class="space-y-2.5"
            :style="{
              width: `${cur.percent}%`,
            }"
          >
            <div
              :class="cn(cur.color, 'h-2.5 w-full overflow-hidden rounded-sm transition-all')"
            ></div>

            <div class="flex flex-1 flex-col items-start">
              <span class="text-xs font-medium text-zinc-400">
                {{ cur.code }}
              </span>
              <span class="text-base font-semibold text-white">{{ cur.percent }}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Ported from reui.io balance card
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
