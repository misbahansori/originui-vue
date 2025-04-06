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
const value = ref("Europe/London");

const timezones = Intl.supportedValuesOf("timeZone");

const formattedTimezones = computed(() => {
  return timezones
    .map((timezone) => {
      const formatter = new Intl.DateTimeFormat("en", {
        timeZone: timezone,
        timeZoneName: "shortOffset",
      });
      const parts = formatter.formatToParts(new Date());
      const offset =
        parts.find((part) => part.type === "timeZoneName")?.value || "";
      const modifiedOffset = offset === "GMT" ? "GMT+0" : offset;

      return {
        value: timezone,
        label: `(${modifiedOffset}) ${timezone.replace(/_/g, " ")}`,
        numericOffset: parseInt(
          offset.replace("GMT", "").replace("+", "") || "0",
        ),
      };
    })
    .sort((a, b) => a.numericOffset - b.numericOffset);
});

const selectedTimezone = computed(() => {
  return formattedTimezones.value.find(
    (timezone) => timezone.value === value.value,
  )?.label;
});

function handleSelect(currentValue: string) {
  value.value = currentValue === value.value ? "" : currentValue;
  open.value = false;
}

function customFilter(value: string, search: string) {
  const normalizedValue = value.toLowerCase();
  const normalizedSearch = search.toLowerCase().replace(/\s+/g, "");
  return normalizedValue.includes(normalizedSearch) ? 1 : 0;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Timezone select with search</Label>
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
            {{ selectedTimezone || "Select timezone" }}
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
        <Command :filter="customFilter">
          <CommandInput placeholder="Search timezone..." />
          <CommandList>
            <CommandEmpty>No timezone found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="timezone in formattedTimezones"
                :key="timezone.value"
                :value="timezone.value"
                @select="handleSelect(timezone.value)"
              >
                {{ timezone.label }}
                <Icon
                  v-if="value === timezone.value"
                  name="lucide:check"
                  size="16"
                  class="ml-auto"
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
