<script setup lang="ts">
import type { Column } from "@tanstack/vue-table";
import type { AcceptableValue } from "reka-ui";

interface ColumnMeta {
  filterVariant?: "text" | "range" | "select";
}

const props = defineProps<{
  column: Column<any, unknown>;
}>();

const id = useId();
const columnFilterValue = computed(() => props.column.getFilterValue());
const filterVariant = computed(
  () => (props.column.columnDef.meta as ColumnMeta | undefined)?.filterVariant,
);
const columnHeader = computed(() =>
  typeof props.column.columnDef.header === "string"
    ? props.column.columnDef.header
    : "",
);

const sortedUniqueValues = computed(() => {
  if (filterVariant.value === "range") return [];

  const values = Array.from(props.column.getFacetedUniqueValues().keys());
  const flattenedValues = values.reduce((acc: string[], curr) => {
    if (Array.isArray(curr)) {
      return [...acc, ...curr];
    }
    return [...acc, curr];
  }, []);

  return Array.from(new Set(flattenedValues)).sort();
});
</script>

<template>
  <div class="*:not-first:mt-2">
    <template v-if="filterVariant === 'range'">
      <Label>{{ columnHeader }}</Label>
      <div class="flex">
        <Input
          :id="`${id}-range-1`"
          class="flex-1 rounded-e-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          :model-value="(columnFilterValue as [number, number])?.[0] ?? ''"
          @update:model-value="
            (value: string | number) =>
              column.setFilterValue((old: [number, number]) => [
                value ? Number(value) : undefined,
                old?.[1],
              ])
          "
          placeholder="Min"
          type="number"
          :aria-label="`${columnHeader} min`"
        />
        <Input
          :id="`${id}-range-2`"
          class="-ms-px flex-1 rounded-s-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          :model-value="(columnFilterValue as [number, number])?.[1] ?? ''"
          @update:model-value="
            (value: string | number) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                value ? Number(value) : undefined,
              ])
          "
          placeholder="Max"
          type="number"
          :aria-label="`${columnHeader} max`"
        />
      </div>
    </template>

    <template v-else-if="filterVariant === 'select'">
      <Label :for="`${id}-select`">{{ columnHeader }}</Label>
      <Select
        :model-value="columnFilterValue?.toString() ?? 'all'"
        @update:model-value="
          (value: AcceptableValue) => {
            column.setFilterValue(value === 'all' ? undefined : value);
          }
        "
      >
        <SelectTrigger :id="`${id}-select`">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup :label="columnHeader">
            <SelectItem value="all">All</SelectItem>
            <SelectItem
              v-for="value in sortedUniqueValues"
              :key="String(value)"
              :value="String(value)"
            >
              {{ String(value) }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </template>

    <template v-else>
      <Label :for="`${id}-input`">{{ columnHeader }}</Label>
      <div class="relative">
        <Input
          :id="`${id}-input`"
          class="peer ps-9"
          :model-value="(columnFilterValue as string) ?? ''"
          @update:model-value="
            (value: string | number) => column.setFilterValue(value)
          "
          :placeholder="`Search ${columnHeader.toLowerCase()}`"
          type="text"
        />
        <div
          class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
        >
          <Icon name="lucide:search" class="size-4" />
        </div>
      </div>
    </template>
  </div>
</template>
