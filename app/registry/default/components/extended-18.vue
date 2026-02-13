<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent } from "@/registry/default/ui/card";
import { Separator } from "@/registry/default/ui/separator";
import { LucideBookmark, LucideMail, LucideStar, LucideVerified } from "lucide-vue-next";
</script>

<template>
  <Card class="relative overflow-hidden rounded-4xl p-0">
    <img
      src="/img/card-avatar.jpg"
      class="absolute inset-0 h-full w-full rounded-2xl object-cover"
    />
    <div
      class="absolute inset-0 h-full w-full rounded-2xl bg-linear-180 from-transparent from-40% to-black/90 to-80%"
    ></div>
    <CardContent class="relative flex flex-col gap-4 p-4">
      <div aria-hidden="true" class="aspect-square w-full"></div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <p class="text-lg/none font-semibold text-white">Marcus Wilson</p>
          <LucideVerified class="size-5 text-blue-600" />
        </div>
        <p class="text-sm/relaxed text-white">
          I'm a Brand Designer who focuses on clarity & emotional connection.
        </p>
      </div>
      <div class="flex items-center justify-around gap-2">
        <div class="flex flex-col items-center gap-1 text-center">
          <div class="flex items-center gap-1">
            <LucideStar class="size-5 text-yellow-400" />
            <p class="text-base/none font-semibold text-white">4.8</p>
          </div>
          <span class="text-xs/none font-medium text-gray-200">Rating</span>
        </div>
        <Separator orientation="vertical" class="bg-white/20 data-[orientation=vertical]:h-8" />
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-base/none font-semibold text-white">$42K+</p>
          <span class="text-xs/none font-medium text-gray-200">Earned</span>
        </div>
        <Separator orientation="vertical" class="bg-white/20 data-[orientation=vertical]:h-8" />
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-base/none font-semibold text-white">$45/hr</p>
          <span class="text-xs/none font-medium text-gray-200">Rate</span>
        </div>
      </div>
      <div class="flex gap-2">
        <Button variant="outline" size="lg" class="w-full flex-1 rounded-full">
          <LucideMail class="size-4" />
          <span>Get in touch</span>
        </Button>
        <Button variant="outline" size="icon" class="size-10 rounded-full">
          <LucideBookmark class="size-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
