<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { ref } from "vue";

interface Option {
  continent: string;
  items: Country[];
}

interface Country {
  value: string;
  label: string;
  flag: string;
}

const options: Option[] = [
  {
    continent: "America",
    items: [
      { value: "1", label: "United States", flag: "🇺🇸" },
      { value: "2", label: "Canada", flag: "🇨🇦" },
      { value: "3", label: "Mexico", flag: "🇲🇽" },
    ],
  },
  {
    continent: "Africa",
    items: [
      { value: "4", label: "South Africa", flag: "🇿🇦" },
      { value: "5", label: "Nigeria", flag: "🇳🇬" },
      { value: "6", label: "Morocco", flag: "🇲🇦" },
    ],
  },
  {
    continent: "Asia",
    items: [
      { value: "7", label: "China", flag: "🇨🇳" },
      { value: "8", label: "Japan", flag: "🇯🇵" },
      { value: "9", label: "India", flag: "🇮🇳" },
    ],
  },
  {
    continent: "Europe",
    items: [
      { value: "10", label: "United Kingdom", flag: "🇬🇧" },
      { value: "11", label: "France", flag: "🇫🇷" },
      { value: "12", label: "Germany", flag: "🇩🇪" },
    ],
  },
  {
    continent: "Oceania",
    items: [
      { value: "13", label: "Australia", flag: "🇦🇺" },
      { value: "14", label: "New Zealand", flag: "🇳🇿" },
    ],
  },
];

const selectedOption = ref<Country | undefined>(options[0]?.items[0]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Options with flag</Label>
    <Select v-model="selectedOption">
      <SelectTrigger
        class="[&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select country">
          <template v-if="selectedOption">
            <span class="text-lg leading-none">{{ selectedOption.flag }}</span>
            <span class="truncate">{{ selectedOption.label }}</span>
          </template>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
      >
        <SelectGroup v-for="continent in options" :key="continent.continent">
          <SelectLabel class="ps-2">{{ continent.continent }}</SelectLabel>
          <SelectItem v-for="country in continent.items" :key="country.value" :value="country">
            <span class="text-lg leading-none">{{ country.flag }}</span>
            <span class="truncate">{{ country.label }}</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
