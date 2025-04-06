<script setup lang="ts">
import { Avatar, AvatarFallback } from "@/registry/default/ui/avatar";
import { LucideUserRound } from "lucide-vue-next";
</script>

<template>
  <Avatar>
    <AvatarFallback>
      <LucideUserRound class="size-4 opacity-60" aria-hidden="true" />
    </AvatarFallback>
  </Avatar>
</template>
