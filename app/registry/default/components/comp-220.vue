<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { ref, useId } from "vue";

const id = useId();

const options = [
  {
    value: "1",
    label: "Completed",
    class: "text-emerald-600",
  },
  {
    value: "2",
    label: "In Progress",
    class: "text-blue-500",
  },
  {
    value: "3",
    label: "Pending",
    class: "text-amber-500",
  },
  {
    value: "4",
    label: "Cancelled",
    class: "text-gray-500",
  },
  {
    value: "5",
    label: "Failed",
    class: "text-red-500",
  },
];

const selectedOption = ref(options[0]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Status select</Label>
    <Select v-model="selectedOption">
      <SelectTrigger
        :id="id"
        class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select status">
          <span v-if="selectedOption" class="flex items-center gap-2">
            <svg
              width="8"
              height="8"
              fill="currentColor"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
              :class="selectedOption.class"
              aria-hidden="true"
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span class="truncate">{{ selectedOption.label }}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
      >
        <SelectItem
          v-for="option in options"
          :key="option.value"
          :value="option"
        >
          <span class="flex items-center gap-2">
            <svg
              width="8"
              height="8"
              fill="currentColor"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
              :class="option.class"
              aria-hidden="true"
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span class="truncate">{{ option.label }}</span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
