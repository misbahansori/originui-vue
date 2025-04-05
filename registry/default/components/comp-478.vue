<script setup lang="ts">
import { Icon } from "#components";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import TableFilter from "@/registry/default/ui/table/TableFilter.vue";
import {
  FlexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useVueTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
} from "@tanstack/vue-table";
import type { VNodeArrayChildren } from "vue";
import { cn } from "~/utils/utils";

type Item = {
  id: string;
  keyword: string;
  intents: Array<
    "Informational" | "Navigational" | "Commercial" | "Transactional"
  >;
  volume: number;
  cpc: number;
  traffic: number;
  link: string;
};

const columns: ColumnDef<Item>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        modelValue:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate"),
        "onUpdate:modelValue": (value: boolean | "indeterminate") =>
          table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        modelValue: row.getIsSelected(),
        "onUpdate:modelValue": (value: boolean | "indeterminate") =>
          row.toggleSelected(!!value),
        "aria-label": "Select row",
      }),
  },
  {
    header: "Keyword",
    accessorKey: "keyword",
    cell: ({ row }) =>
      h("div", { class: "font-medium" }, row.getValue("keyword")),
  },
  {
    header: "Intents",
    accessorKey: "intents",
    cell: ({ row }) => {
      const intents = row.getValue("intents") as string[];
      return h(
        "div",
        { class: "flex gap-1" },
        intents.map((intent) => {
          const styles = {
            Informational: "bg-indigo-400/20 text-indigo-500",
            Navigational: "bg-emerald-400/20 text-emerald-500",
            Commercial: "bg-amber-400/20 text-amber-500",
            Transactional: "bg-rose-400/20 text-rose-500",
          }[intent];

          return h(
            "div",
            {
              key: intent,
              class: cn(
                "flex size-5 items-center justify-center rounded text-xs font-medium",
                styles,
              ),
            },
            intent.charAt(0),
          );
        }) as VNodeArrayChildren,
      );
    },
    enableSorting: false,
    meta: {
      filterVariant: "select",
    },
    filterFn: (row, id, filterValue) => {
      const rowValue = row.getValue(id);
      return Array.isArray(rowValue) && rowValue.includes(filterValue);
    },
  },
  {
    header: "Volume",
    accessorKey: "volume",
    cell: ({ row }) => {
      const volume = parseInt(row.getValue("volume"));
      return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(volume);
    },
    meta: {
      filterVariant: "range",
    },
  },
  {
    header: "CPC",
    accessorKey: "cpc",
    cell: ({ row }) => h("div", {}, `$${row.getValue("cpc")}`),
    meta: {
      filterVariant: "range",
    },
  },
  {
    header: "Traffic",
    accessorKey: "traffic",
    cell: ({ row }) => {
      const traffic = parseInt(row.getValue("traffic"));
      return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(traffic);
    },
    meta: {
      filterVariant: "range",
    },
  },
  {
    header: "Link",
    accessorKey: "link",
    cell: ({ row }) =>
      h(
        "a",
        {
          class: "inline-flex items-center gap-1 hover:underline",
          href: "#",
        },
        [
          row.getValue("link"),
          h(Icon, {
            name: "lucide:external-link",
            class: "size-3",
            "aria-hidden": "true",
          }),
        ] as VNodeArrayChildren,
      ),
    enableSorting: false,
  },
];

const items: Item[] = [
  {
    id: "1",
    keyword: "react components",
    intents: ["Informational", "Navigational"],
    volume: 2507,
    cpc: 2.5,
    traffic: 88,
    link: "https://originui.com",
  },
  {
    id: "2",
    keyword: "buy react templates",
    intents: ["Commercial", "Transactional"],
    volume: 1850,
    cpc: 4.75,
    traffic: 65,
    link: "https://originui.com/input",
  },
  {
    id: "3",
    keyword: "react ui library",
    intents: ["Informational", "Commercial"],
    volume: 3200,
    cpc: 3.25,
    traffic: 112,
    link: "https://originui.com/badge",
  },
  {
    id: "4",
    keyword: "tailwind components download",
    intents: ["Transactional"],
    volume: 890,
    cpc: 1.95,
    traffic: 45,
    link: "https://originui.com/alert",
  },
  {
    id: "5",
    keyword: "react dashboard template free",
    intents: ["Commercial", "Transactional"],
    volume: 4100,
    cpc: 5.5,
    traffic: 156,
    link: "https://originui.com/tabs",
  },
  {
    id: "6",
    keyword: "how to use react components",
    intents: ["Informational"],
    volume: 1200,
    cpc: 1.25,
    traffic: 42,
    link: "https://originui.com/table",
  },
  {
    id: "7",
    keyword: "react ui kit premium",
    intents: ["Commercial", "Transactional"],
    volume: 760,
    cpc: 6.8,
    traffic: 28,
    link: "https://originui.com/avatar",
  },
  {
    id: "8",
    keyword: "react component documentation",
    intents: ["Informational", "Navigational"],
    volume: 950,
    cpc: 1.8,
    traffic: 35,
    link: "https://originui.com",
  },
];

const columnFilters = ref<ColumnFiltersState>([]);
const sorting = ref<SortingState>([
  {
    id: "traffic",
    desc: false,
  },
]);

const table = useVueTable({
  get data() {
    return items;
  },
  get columns() {
    return columns;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
  },
  onColumnFiltersChange: (updater) => {
    columnFilters.value =
      typeof updater === "function" ? updater(columnFilters.value) : updater;
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
  getFacetedMinMaxValues: getFacetedMinMaxValues(),
  onSortingChange: (updater) => {
    sorting.value =
      typeof updater === "function" ? updater(sorting.value) : updater;
  },
  enableSortingRemoval: false,
});
</script>

<template>
  <div class="space-y-6">
    <!-- Filters -->
    <div class="flex flex-wrap gap-3">
      <!-- Search input -->
      <div class="w-44">
        <TableFilter :column="table.getColumn('keyword')!" />
      </div>
      <!-- Intents select -->
      <div class="w-36">
        <TableFilter :column="table.getColumn('intents')!" />
      </div>
      <!-- Volume inputs -->
      <div class="w-36">
        <TableFilter :column="table.getColumn('volume')!" />
      </div>
      <!-- CPC inputs -->
      <div class="w-36">
        <TableFilter :column="table.getColumn('cpc')!" />
      </div>
      <!-- Traffic inputs -->
      <div class="w-36">
        <TableFilter :column="table.getColumn('traffic')!" />
      </div>
    </div>

    <Table>
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="bg-muted/50"
        >
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            class="relative h-10 border-t select-none"
            :aria-sort="
              header.column.getIsSorted() === 'asc'
                ? 'ascending'
                : header.column.getIsSorted() === 'desc'
                  ? 'descending'
                  : 'none'
            "
          >
            <template v-if="!header.isPlaceholder">
              <div
                v-if="header.column.getCanSort()"
                :class="
                  cn(
                    header.column.getCanSort() &&
                      'flex h-full cursor-pointer items-center justify-between gap-2 select-none',
                  )
                "
                @click="header.column.getToggleSortingHandler()"
                @keydown="
                  (e) => {
                    if (
                      header.column.getCanSort() &&
                      (e.key === 'Enter' || e.key === ' ')
                    ) {
                      e.preventDefault();
                      header.column.getToggleSortingHandler()?.(e);
                    }
                  }
                "
                :tabindex="header.column.getCanSort() ? 0 : undefined"
              >
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <Icon
                  v-if="header.column.getIsSorted() === 'asc'"
                  name="lucide:chevron-up"
                  class="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <Icon
                  v-else-if="header.column.getIsSorted() === 'desc'"
                  name="lucide:chevron-down"
                  class="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span v-else class="size-4" aria-hidden="true" />
              </div>
              <FlexRender
                v-else
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </template>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() && 'selected'"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Data table with filters made with
      <a
        class="hover:text-foreground underline"
        href="https://tanstack.com/table"
        target="_blank"
        rel="noopener noreferrer"
      >
        TanStack Table
      </a>
    </p>
  </div>
</template>
