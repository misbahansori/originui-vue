<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { LucideCheck, LucideChevronDown } from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const open = ref(false);
const value = ref("");

const countries = [
  {
    continent: "America",
    items: [
      { value: "United States", flag: "🇺🇸" },
      { value: "Canada", flag: "🇨🇦" },
      { value: "Mexico", flag: "🇲🇽" },
    ],
  },
  {
    continent: "Africa",
    items: [
      { value: "South Africa", flag: "🇿🇦" },
      { value: "Nigeria", flag: "🇳🇬" },
      { value: "Morocco", flag: "🇲🇦" },
    ],
  },
  {
    continent: "Asia",
    items: [
      { value: "China", flag: "🇨🇳" },
      { value: "Japan", flag: "🇯🇵" },
      { value: "India", flag: "🇮🇳" },
    ],
  },
  {
    continent: "Europe",
    items: [
      { value: "United Kingdom", flag: "🇬🇧" },
      { value: "France", flag: "🇫🇷" },
      { value: "Germany", flag: "🇩🇪" },
    ],
  },
  {
    continent: "Oceania",
    items: [
      { value: "Australia", flag: "🇦🇺" },
      { value: "New Zealand", flag: "🇳🇿" },
    ],
  },
];

function getSelectedCountryFlag() {
  for (const group of countries) {
    const found = group.items.find((item) => item.value === value.value);
    if (found) return found.flag;
  }
  return null;
}

function handleSelect(currentValue: string) {
  value.value = currentValue;
  open.value = false;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with flag and search</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          :id="id"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
        >
          <span v-if="value" class="flex min-w-0 items-center gap-2">
            <span class="text-lg leading-none">
              {{ getSelectedCountryFlag() }}
            </span>
            <span class="truncate">{{ value }}</span>
          </span>
          <span v-else class="text-muted-foreground">Select country</span>
          <LucideChevronDown
            :size="16"
            class="text-muted-foreground/80 shrink-0"
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        class="border-input w-full min-w-[var(--reka-popper-anchor-width)] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <template v-for="group in countries" :key="group.continent">
              <CommandGroup :heading="group.continent">
                <CommandItem
                  v-for="country in group.items"
                  :key="country.value"
                  :value="country.value"
                  @select="handleSelect(country.value)"
                >
                  <span class="text-lg leading-none">{{ country.flag }}</span>
                  {{ country.value }}
                  <LucideCheck
                    v-if="value === country.value"
                    :size="16"
                    class="ml-auto"
                  />
                </CommandItem>
              </CommandGroup>
            </template>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
