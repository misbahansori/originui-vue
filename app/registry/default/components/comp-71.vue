<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="group relative">
    <Label
      :for="id"
      class="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
    >
      Textarea with overlapping label
    </Label>
    <Textarea :id="id" v-model="textValue" />
  </div>
</template>
