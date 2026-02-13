<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { ref } from "vue";

const value = ref("left");
</script>

<template>
  <ToggleGroup type="single" variant="outline" v-model="value">
    <ToggleGroupItem class="flex-1" value="left">Left</ToggleGroupItem>
    <ToggleGroupItem class="flex-1" value="center">Center</ToggleGroupItem>
    <ToggleGroupItem class="flex-1" value="right">Right</ToggleGroupItem>
  </ToggleGroup>
</template>
