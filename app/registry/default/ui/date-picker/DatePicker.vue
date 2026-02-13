<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { RangeCalendar } from "@/registry/default/ui/range-calendar";
import { getLocalTimeZone } from "@internationalized/date";
import { formatDate } from "@vueuse/core";
import { CalendarIcon } from "lucide-vue-next";
import { type DateRange } from "reka-ui";
import { ref } from "vue";

const date = ref<DateRange | undefined>();
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        size="sm"
        class="group bg-background border-input w-full justify-between px-3 text-sm font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
      >
        <CalendarIcon
          :size="16"
          class="text-muted-foreground/80 -ms-1 shrink-0 transition-colors"
          aria-hidden="true"
        />
        <span :class="cn('truncate', !date && 'font-medium')">
          <template v-if="date?.start">
            <template v-if="date.end">
              {{ formatDate(date.start.toDate(getLocalTimeZone()), "MMM DD, YYYY") }}
              -
              {{ formatDate(date.end.toDate(getLocalTimeZone()), "MMM DD, YYYY") }}
            </template>
            <template v-else>
              {{ formatDate(date.start.toDate(getLocalTimeZone()), "MMM DD, YYYY") }}
            </template>
          </template>
          <template v-else>Date</template>
        </span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <RangeCalendar v-model="date" />
    </PopoverContent>
  </Popover>
</template>
