<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with start add-on</Label>
    <div class="flex rounded-md shadow-xs">
      <span
        class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm"
      >
        https://
      </span>
      <Input
        :id="id"
        class="-ms-px rounded-s-none shadow-none"
        placeholder="google.com"
        type="text"
      />
    </div>
  </div>
</template>
