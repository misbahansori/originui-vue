<script setup lang="ts">
import { Card, CardContent } from "@/registry/default/ui/card";
import { Separator } from "@/registry/default/ui/separator";
import { LucideMail, LucideStar, LucideVerified } from "lucide-vue-next";
</script>

<template>
  <Card class="rounded-4xl py-4">
    <CardContent class="flex flex-col gap-4 px-4">
      <img
        src="/img/card-avatar.jpg"
        class="aspect-square w-full rounded-2xl object-cover"
      />
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <p class="text-lg/none font-semibold">Marcus Wilson</p>
          <LucideVerified class="size-5 text-blue-600" />
        </div>
        <p class="text-foreground/80 text-sm/relaxed">
          I'm a Brand Designer who focuses on clarity & emotional connection.
        </p>
      </div>
      <div class="flex items-center justify-around gap-2">
        <div class="flex flex-col items-center gap-1 text-center">
          <div class="flex items-center gap-1">
            <LucideStar class="size-5 text-yellow-500" />
            <p class="text-base/none font-semibold">4.8</p>
          </div>
          <span class="text-foreground/70 text-xs/none font-medium">
            Rating
          </span>
        </div>
        <Separator
          orientation="vertical"
          class="data-[orientation=vertical]:h-8"
        />
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-base/none font-semibold">$42K+</p>
          <span class="text-foreground/70 text-xs/none font-medium">
            Earned
          </span>
        </div>
        <Separator
          orientation="vertical"
          class="data-[orientation=vertical]:h-8"
        />
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-base/none font-semibold">$45/hr</p>
          <span class="text-foreground/70 text-xs/none font-medium">Rate</span>
        </div>
      </div>
      <div class="flex gap-2">
        <Button size="lg" class="w-full flex-1 rounded-full">
          <LucideMail class="size-4" />
          <span>Contact me</span>
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
