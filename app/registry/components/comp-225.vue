<script setup lang="ts">
const id = useId();

const countries = [
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
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with flag</Label>
    <Select default-value="2">
      <SelectTrigger
        :id="id"
        class="[&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
      >
        <SelectGroup v-for="continent in countries" :key="continent.continent">
          <SelectLabel class="ps-2">{{ continent.continent }}</SelectLabel>
          <SelectItem
            v-for="item in continent.items"
            :key="item.value"
            :value="item.value"
          >
            <span class="text-lg leading-none">{{ item.flag }}</span>
            <span class="truncate">{{ item.label }}</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
