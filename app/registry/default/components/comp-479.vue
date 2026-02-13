<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import { valueUpdater } from "@/registry/default/ui/table/utils";
import {
  FlexRender,
  getCoreRowModel,
  getSortedRowModel,
  useVueTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/vue-table";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
import { h, onMounted, ref, shallowRef } from "vue";

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
  department: string;
  role: string;
  joinDate: string;
  lastActive: string;
  performance: "Excellent" | "Good" | "Average" | "Poor";
};

const columns: ColumnDef<Item>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => h("div", { class: "truncate font-medium" }, row.getValue("name")),
    sortUndefined: "last",
    sortDescFirst: false,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) =>
      h("div", { class: "truncate" }, [
        h("span", { class: "text-lg leading-none" }, row.original.flag as string),
        " ",
        row.getValue("location") as string,
      ]),
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Balance",
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return formatted;
    },
  },
  {
    header: "Department",
    accessorKey: "department",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Join Date",
    accessorKey: "joinDate",
  },
  {
    header: "Last Active",
    accessorKey: "lastActive",
  },
  {
    header: "Performance",
    accessorKey: "performance",
  },
];

const data = shallowRef<Item[]>([]);
const sorting = ref<SortingState>([
  {
    id: "name",
    desc: false,
  },
]);

onMounted(async () => {
  const res = await $fetch("/api/users");
  data.value = res.slice(0, 5);
});

const table = useVueTable({
  get data() {
    return data.value;
  },
  get columns() {
    return columns;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  columnResizeMode: "onChange",
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  onSortingChange: (updater) => valueUpdater(updater, sorting),
  enableSortingRemoval: false,
});
</script>

<template>
  <div>
    <Table
      class="table-fixed"
      :style="{
        width: table.getCenterTotalSize(),
      }"
    >
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="bg-muted/50"
        >
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            :style="{
              width: header.getSize() + 'px',
            }"
            class="relative h-10 border-t select-none last:[&>.cursor-col-resize]:opacity-0"
            :aria-sort="
              header.column.getIsSorted() === 'asc'
                ? 'ascending'
                : header.column.getIsSorted() === 'desc'
                  ? 'descending'
                  : 'none'
            "
            :colSpan="header.colSpan"
          >
            <template v-if="!header.isPlaceholder">
              <div
                :class="
                  cn(
                    header.column.getCanSort() &&
                      'flex h-full cursor-pointer items-center justify-between gap-2 select-none',
                  )
                "
                @click="header.column.getToggleSortingHandler()?.($event)"
                @keydown="
                  (e) => {
                    if (header.column.getCanSort() && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      header.column.getToggleSortingHandler()?.(e);
                    }
                  }
                "
                :tabindex="header.column.getCanSort() ? 0 : undefined"
              >
                <span class="truncate">
                  <FlexRender
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </span>
                <LucideChevronUp
                  v-if="header.column.getIsSorted() === 'asc'"
                  class="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <LucideChevronDown
                  v-else-if="header.column.getIsSorted() === 'desc'"
                  class="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
              </div>
            </template>
            <div
              v-if="header.column.getCanResize()"
              @dblclick="header.column.resetSize()"
              @mousedown="header.getResizeHandler()?.($event)"
              @touchstart="header.getResizeHandler()?.($event)"
              class="user-select-none before:bg-border absolute top-0 -right-2 z-10 flex h-full w-4 cursor-col-resize touch-none justify-center before:absolute before:inset-y-0 before:w-px before:translate-x-px"
            />
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
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id" class="truncate">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center">No results.</TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Resizable and sortable columns made with
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
