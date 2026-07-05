<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const inputValue = ref("This is a read-only input");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Read-only input</Label>
    <Input
      class="read-only:bg-muted"
      v-model="inputValue"
      readonly
      placeholder="Email"
      type="email"
    />
  </div>
</template>
