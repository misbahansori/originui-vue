<script setup lang="ts">
import { Card, CardContent } from "@/registry/default/ui/card";
import { Separator } from "@/registry/default/ui/separator";
</script>

<template>
  <Card class="gap-4 overflow-hidden pt-0">
    <div class="overflow-y-auto">
      <div class="h-28">
        <img
          class="h-full w-full object-cover"
          src="/profile-bg.jpg"
          alt="User profile background"
          width="512"
          height="96"
        />
      </div>
      <div class="-mt-10 flex flex-col items-center justify-center gap-2">
        <div
          class="border-background bg-muted relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 shadow-xs shadow-black/10"
        >
          <img
            src="/avatar-72-01.jpg"
            class="h-full w-full object-cover"
            width="80"
            height="80"
            alt="Profile image"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center gap-1 text-center"
        >
          <h1 class="text-lg/none font-bold">Jane Doe</h1>
          <p class="text-muted-foreground text-sm font-medium">
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
    <CardContent class="flex flex-col px-6">
      <div class="flex justify-between gap-2">
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-muted-foreground text-xs font-medium">Followers</p>
          <p class="text-xl font-medium tracking-tighter tabular-nums">124K</p>
        </div>
        <Separator
          orientation="vertical"
          class="data-[orientation=vertical]:h-12"
        />
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-muted-foreground text-xs font-medium">Following</p>
          <p class="text-xl font-medium tracking-tighter tabular-nums">412</p>
        </div>
        <Separator
          orientation="vertical"
          class="data-[orientation=vertical]:h-12"
        />
        <div class="flex flex-col items-center gap-1 text-center">
          <p class="text-muted-foreground text-xs font-medium">Posts</p>
          <p class="text-xl font-medium tracking-tighter tabular-nums">124</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
