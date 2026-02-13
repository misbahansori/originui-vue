<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useVueTable,
  type ColumnDef,
  type ExpandedState,
  type RowSelectionState,
} from "@tanstack/vue-table";
import { ChevronDownIcon, ChevronUpIcon, InfoIcon } from "lucide-vue-next";
import { h, onMounted, ref } from "vue";

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
  note?: string;
};

const data = ref<Item[]>([]);
const rowSelection = ref<RowSelectionState>({});
const expanded = ref<ExpandedState>({});

const columns: ColumnDef<Item>[] = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand()
        ? h(
            Button,
            {
              class: "size-7 shadow-none text-muted-foreground",
              onClick: () => row.toggleExpanded(),
              "aria-expanded": row.getIsExpanded(),
              "aria-label": row.getIsExpanded()
                ? `Collapse details for ${row.original.name}`
                : `Expand details for ${row.original.name}`,
              size: "icon",
              variant: "ghost",
            },
            () => [
              row.getIsExpanded()
                ? h(ChevronUpIcon, {
                    class: "opacity-60",
                    size: 16,
                    "aria-hidden": "true",
                  })
                : h(ChevronDownIcon, {
                    class: "opacity-60",
                    size: 16,
                    "aria-hidden": "true",
                  }),
            ],
          )
        : undefined;
    },
  },
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
        "onUpdate:modelValue": (value: boolean | "indeterminate") => row.toggleSelected(!!value),
        "aria-label": "Select row",
      }),
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => h("div", { class: "font-medium" }, row.getValue("name")),
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) =>
      h("div", {}, [
        h("span", { class: "text-lg leading-none" }, row.original.flag as string),
        " ",
        row.getValue("location") as string,
      ]),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) =>
      h(
        Badge,
        {
          class:
            row.getValue("status") === "Inactive"
              ? "bg-muted-foreground/60 text-primary-foreground"
              : "",
        },
        () => row.getValue("status"),
      ),
  },
  {
    header: () => h("div", { class: "text-right" }, "Balance"),
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return h("div", { class: "text-right" }, formatted);
    },
  },
];

onMounted(async () => {
  try {
    const res = await $fetch("/api/users");
    data.value = res.slice(0, 5);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});

const table = useVueTable({
  get data() {
    return data.value;
  },
  columns,
  getRowCanExpand: (row) => Boolean(row.original.note),
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  state: {
    get rowSelection() {
      return rowSelection.value;
    },
    get expanded() {
      return expanded.value;
    },
  },
  onRowSelectionChange: (updaterOrValue) => {
    rowSelection.value =
      typeof updaterOrValue === "function" ? updaterOrValue(rowSelection.value) : updaterOrValue;
  },
  onExpandedChange: (updaterOrValue) => {
    expanded.value =
      typeof updaterOrValue === "function" ? updaterOrValue(expanded.value) : updaterOrValue;
  },
});
</script>

<template>
  <div>
    <Table>
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="hover:bg-transparent"
        >
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <template v-for="row in table.getRowModel().rows" :key="row.id">
            <TableRow :data-state="row.getIsSelected() && 'selected'">
              <TableCell
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                class="whitespace-nowrap [&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0 [&:has([aria-expanded])]:pr-0"
              >
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </TableCell>
            </TableRow>
            <TableRow v-if="row.getIsExpanded()">
              <TableCell :colspan="row.getVisibleCells().length">
                <div class="text-primary/80 flex items-start py-2">
                  <span class="me-3 mt-0.5 flex w-7 shrink-0 justify-center" aria-hidden="true">
                    <InfoIcon class="opacity-60" :size="16" />
                  </span>
                  <p class="text-sm whitespace-pre-wrap">
                    {{ row.original.note }}
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </template>
        </template>
        <TableRow v-else>
          <TableCell :colspan="columns.length" class="h-24 text-center">No results.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Expanding sub-row made with
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
