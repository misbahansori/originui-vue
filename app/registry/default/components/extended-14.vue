<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card";
import { LucideArrowRight, LucideBookmark, LucideBriefcase } from "lucide-vue-next";
</script>

<template>
  <Card class="rounded-2xl py-4">
    <CardHeader class="flex flex-row items-center justify-between px-4">
      <div class="bg-muted flex size-8 items-center justify-center gap-2 rounded-md">
        <LucideBriefcase class="h-4 w-4" />
      </div>
      <Button size="sm" variant="secondary">
        <span class="text-sm font-medium">Save</span>
        <LucideBookmark class="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent class="flex flex-col gap-4 px-4">
      <div class="flex flex-col gap-3 border-b border-dashed pb-4">
        <div class="flex items-baseline gap-2">
          <span class="text-base font-medium">Dribbble</span>
          <time class="text-muted-foreground text-xs font-medium">12 days ago</time>
        </div>

        <h3 class="text-2xl/none font-semibold">Full Stack Developer</h3>

        <div class="flex items-center gap-2">
          <Badge variant="secondary">Contract</Badge>
          <Badge variant="secondary">Remote</Badge>
          <Badge variant="secondary">Full Time</Badge>
        </div>
      </div>

      <div class="flex items-center justify-between gap-2">
        <div class="flex flex-col">
          <span class="text-base/none font-semibold">$160k/year</span>
          <p class="text-muted-foreground text-sm font-medium">San Francisco, CA</p>
        </div>
        <Button>
          <span class="text-sm font-medium">Apply</span>
          <LucideArrowRight class="h-4 w-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
