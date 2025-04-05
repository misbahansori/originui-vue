<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
</script>

<template>
  <div class="mt-16 text-center md:mt-20">
    <h2
      class="font-heading text-foreground mb-6 text-3xl/[1.1] font-bold tracking-tight"
    >
      Didn't find what you were looking for?
    </h2>
    <NuxtLink
      to="https://github.com/origin-space/originui/discussions/categories/suggestions"
      target="_blank"
      :class="cn(buttonVariants({ variant: 'default' }), 'rounded-full')"
    >
      <span class="text-primary-foreground">Suggest component</span>
    </NuxtLink>
  </div>
</template>
