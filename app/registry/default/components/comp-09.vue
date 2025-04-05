<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { LucideAtSign } from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with start icon</Label>
    <div class="relative">
      <Input :id="id" class="peer ps-9" placeholder="Email" type="email" />
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
      >
        <LucideAtSign :size="16" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
