<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { RiReactjsLine, RiSvelteLine, RiVuejsLine } from "@remixicon/vue";
import { ref, useId } from "vue";

const id = useId();

const options = [
  {
    label: "Vue",
    icon: RiVuejsLine,
    value: "vue",
  },
  {
    label: "React",
    icon: RiReactjsLine,
    value: "react",
  },
  {
    label: "Svelte",
    icon: RiSvelteLine,
    value: "svelte",
  },
];

const selectedOption = ref(options[0]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with icon</Label>
    <Select v-model="selectedOption">
      <SelectTrigger
        :id="id"
        class="[&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select framework">
          <template v-if="selectedOption">
            <component
              :is="selectedOption.icon"
              class="size-4"
              aria-hidden="true"
            />
            <span class="truncate">{{ selectedOption.label }}</span>
          </template>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
      >
        <SelectItem
          v-for="option in options"
          :key="option.value"
          :value="option"
        >
          <component :is="option.icon" class="size-4" aria-hidden="true" />
          <span class="truncate">{{ option.label }}</span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
