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
import { ref, useId } from "vue";

const id = useId();
const open = ref(false);
const value = ref("");

const items = [
  {
    value: "analytics platform",
    label: "Analytics Platform",
    icon: "lucide:line-chart",
    number: 2451,
  },
  {
    value: "ai services",
    label: "AI Services",
    icon: "lucide:brain",
    number: 1832,
  },
  {
    value: "database systems",
    label: "Database Systems",
    icon: "lucide:database",
    number: 1654,
  },
  {
    value: "compute resources",
    label: "Compute Resources",
    icon: "lucide:cpu",
    number: 943,
  },
  {
    value: "network services",
    label: "Network Services",
    icon: "lucide:network",
    number: 832,
  },
  {
    value: "web services",
    label: "Web Services",
    icon: "lucide:globe",
    number: 654,
  },
  {
    value: "monitoring tools",
    label: "Monitoring Tools",
    icon: "lucide:search",
    number: 432,
  },
  {
    value: "server management",
    label: "Server Management",
    icon: "lucide:server",
    number: 321,
  },
  {
    value: "infrastructure",
    label: "Infrastructure",
    icon: "lucide:blocks",
    number: 234,
  },
  {
    value: "frontend services",
    label: "Frontend Services",
    icon: "lucide:layout",
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

function getSelectedItemIcon(): string {
  return getSelectedItem()?.icon || "lucide:help-circle";
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
            <Icon
              v-if="getSelectedItem()"
              :name="getSelectedItemIcon()"
              class="text-muted-foreground size-4"
            />
            <span class="truncate">{{ getSelectedItem()?.label }}</span>
          </span>
          <span v-else class="text-muted-foreground">
            Select service category
          </span>
          <Icon
            name="lucide:chevron-down"
            size="16"
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
                  <Icon
                    :name="item.icon"
                    class="text-muted-foreground size-4"
                  />
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
