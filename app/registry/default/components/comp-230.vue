<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { computed, ref, useId } from "vue";

const id = useId();
const open = ref(false);
const value = ref("originui");

const organizations = [
  {
    value: "originui",
    label: "Origin UI",
  },
  {
    value: "cruip",
    label: "Cruip",
  },
];

const selectedOrganization = computed(() => {
  return organizations.find(
    (organization) => organization.value === value.value,
  )?.label;
});

function handleSelect(currentValue: string) {
  value.value = currentValue === value.value ? "" : currentValue;
  open.value = false;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with search and button</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          :id="id"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
        >
          <span :class="cn('truncate', !value && 'text-muted-foreground')">
            {{ selectedOrganization || "Select organization" }}
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
          <CommandInput placeholder="Find organization" />
          <CommandList>
            <CommandEmpty>No organization found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="organization in organizations"
                :key="organization.value"
                :value="organization.value"
                @select="handleSelect(organization.value)"
              >
                {{ organization.label }}
                <Icon
                  v-if="value === organization.value"
                  name="lucide:check"
                  size="16"
                  class="ml-auto"
                />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <Button variant="ghost" class="w-full justify-start font-normal">
                <Icon
                  name="lucide:plus"
                  size="16"
                  class="-ms-2 opacity-60"
                  aria-hidden="true"
                />
                New organization
              </Button>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
