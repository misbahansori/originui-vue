<script setup lang="ts">
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  LucideMoreHorizontal,
  LucideRocket,
  LucideUserPlus,
  LucideVerified,
} from "lucide-vue-next";
</script>

<template>
  <Card class="py-4">
    <CardContent class="flex flex-col gap-3 px-4">
      <div class="flex gap-3">
        <div
          class="bg-primary text-primary-foreground flex size-20 items-center justify-center rounded-md border-2"
        >
          <LucideRocket class="size-10" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-1">
              <p class="text-base font-medium">SpaceX</p>
              <LucideVerified class="size-4 shrink-0" />
            </div>
            <Badge
              variant="outline"
              class="text-[0.625rem] font-medium tracking-wide uppercase"
            >
              Aerospace
            </Badge>
          </div>
          <span class="text-muted-foreground text-sm/none font-medium">
            Space Exploration
          </span>
          <div class="text-muted-foreground text-sm/none">
            <span class="font-semibold">12,000+</span>
            Employees
          </div>
        </div>
      </div>
      <p class="text-muted-foreground text-sm/relaxed">
        SpaceX is revolutionizing space technology with reusable rockets and
        ambitious missions to make humanity a multi-planetary species.
      </p>
      <div class="flex flex-wrap gap-2">
        <Badge variant="outline">#spacex</Badge>
        <Badge variant="outline">#aerospace</Badge>
        <Badge variant="outline">#technology</Badge>
      </div>
      <div class="flex gap-2">
        <Button size="lg" class="w-full flex-1 rounded-full">
          <LucideUserPlus class="size-4" />
          <span>Follow</span>
        </Button>
        <Button variant="outline" class="size-10 rounded-full">
          <LucideMoreHorizontal class="size-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
