<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "vue";

const id = useId();

const options = [
  {
    label: "Standard Plan",
    value: "standard",
    description: "Ideal for individuals",
  },
  {
    label: "Pro Plan",
    value: "pro",
    description: "For professional users",
  },
  {
    label: "Enterprise Plan",
    value: "enterprise",
    description: "Built for large teams",
  },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with description and right indicator</Label>
    <Select default-value="2">
      <SelectTrigger :id="id" class="**:data-desc:hidden">
        <SelectValue placeholder="Choose a plan" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
      >
        <SelectItem v-for="option in options" :key="option.value" :value="option">
          <SelectItemText>{{ option.label }}</SelectItemText>
          <span class="text-muted-foreground mt-1 block text-xs" data-desc>
            {{ option.description }}
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
