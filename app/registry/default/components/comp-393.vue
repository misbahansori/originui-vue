<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
</script>

<template>
  <Avatar class="rounded-md">
    <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
    <AvatarFallback>KK</AvatarFallback>
  </Avatar>
</template>
