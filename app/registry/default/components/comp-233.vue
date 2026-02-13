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
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import {
  LucideBrain,
  LucideChevronDown,
  LucideCpu,
  LucideDatabase,
  LucideGlobe,
  LucideHelpCircle,
  LucideLayout,
  LucideLineChart,
  LucideNetwork,
  LucideSearch,
  LucideServer,
} from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const open = ref(false);
const value = ref("");

const items = [
  {
    value: "analytics platform",
    label: "Analytics Platform",
    icon: LucideLineChart,
    number: 2451,
  },
  {
    value: "ai services",
    label: "AI Services",
    icon: LucideBrain,
    number: 1832,
  },
  {
    value: "database systems",
    label: "Database Systems",
    icon: LucideDatabase,
    number: 1654,
  },
  {
    value: "compute resources",
    label: "Compute Resources",
    icon: LucideCpu,
    number: 943,
  },
  {
    value: "network services",
    label: "Network Services",
    icon: LucideNetwork,
    number: 832,
  },
  {
    value: "web services",
    label: "Web Services",
    icon: LucideGlobe,
    number: 654,
  },
  {
    value: "monitoring tools",
    label: "Monitoring Tools",
    icon: LucideSearch,
    number: 432,
  },
  {
    value: "server management",
    label: "Server Management",
    icon: LucideServer,
    number: 321,
  },
  {
    value: "infrastructure",
    label: "Infrastructure",
    icon: "Lucide:Blocks",
    number: 234,
  },
  {
    value: "frontend services",
    label: "Frontend Services",
    icon: LucideLayout,
    number: 123,
  },
];

function handleSelect(currentValue: string) {
  value.value = currentValue === value.value ? "" : currentValue;
  open.value = false;
}

function getSelectedItem() {
  return items.find((item) => item.value === value.value);
}

function getSelectedItemIcon() {
  return getSelectedItem()?.icon || LucideHelpCircle;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with icon and number</Label>
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
            <component :is="getSelectedItemIcon()" :size="16" class="text-muted-foreground" />
            <span class="truncate">{{ getSelectedItem()?.label }}</span>
          </span>
          <span v-else class="text-muted-foreground">Select service category</span>
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
          <CommandInput placeholder="Search services..." />
          <CommandList>
            <CommandEmpty>No service found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="item in items"
                :key="item.value"
                :value="item.value"
                @select="handleSelect(item.value)"
                class="flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <component :is="item.icon" :size="16" class="text-muted-foreground" />
                  {{ item.label }}
                </div>
                <span class="text-muted-foreground text-xs">
                  {{ item.number.toLocaleString() }}
                </span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
