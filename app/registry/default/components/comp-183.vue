<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { LucideMoon, LucideSun } from "lucide-vue-next";
import { ref } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div>
    <div
      class="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
    >
      <Switch
        :id="id"
        v-model="checked"
        class="peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
      />
      <span
        class="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center"
      >
        <LucideMoon :size="16" aria-hidden="true" />
      </span>
      <span
        class="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center"
      >
        <LucideSun :size="16" aria-hidden="true" />
      </span>
    </div>
    <Label :for="id" class="sr-only">Labeled switch</Label>
  </div>
</template>
