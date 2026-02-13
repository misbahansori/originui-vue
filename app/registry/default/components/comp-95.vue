<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import { LucideChevronDown } from "lucide-vue-next";
</script>

<template>
  <Button variant="ghost" class="h-auto p-0 hover:bg-transparent">
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="Profile image" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
    <LucideChevronDown :size="16" class="opacity-60" aria-hidden="true" />
  </Button>
</template>
