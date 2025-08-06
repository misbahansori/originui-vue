<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
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
  getSortedRowModel,
  useVueTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/vue-table";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  GripVerticalIcon,
} from "lucide-vue-next";
import { h, onMounted, ref } from "vue";

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};

const columns: ColumnDef<Item>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) =>
      h("div", { class: "truncate font-medium" }, row.getValue("name")),
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
        h(
          "span",
          { class: "text-lg leading-none" },
          row.original.flag as string,
        ),
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
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    },
  },
];

const data = ref<Item[]>([]);
const sorting = ref<SortingState>([]);

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
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  enableSortingRemoval: false,
});
</script>

<template>
  <div>
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
            class="before:bg-border relative h-10 border-t before:absolute before:inset-y-0 before:start-0 before:w-px first:before:bg-transparent"
            :aria-sort="
              header.column.getIsSorted() === 'asc'
                ? 'ascending'
                : header.column.getIsSorted() === 'desc'
                  ? 'descending'
                  : 'none'
            "
          >
            <div class="flex items-center justify-start gap-0.5">
              <Button
                size="icon"
                variant="ghost"
                class="-ml-2 size-7 shadow-none"
                aria-label="Drag to reorder"
              >
                <GripVerticalIcon
                  class="opacity-60"
                  :size="16"
                  aria-hidden="true"
                />
              </Button>
              <span class="grow truncate" v-if="!header.isPlaceholder">
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </span>
              <Button
                v-if="header.column.getCanSort()"
                size="icon"
                variant="ghost"
                class="group -mr-1 size-7 shadow-none"
                @click="header.column.getToggleSortingHandler()?.($event)"
                @keydown="
                  (e: KeyboardEvent) => {
                    if (
                      header.column.getCanSort() &&
                      (e.key === 'Enter' || e.key === ' ')
                    ) {
                      e.preventDefault();
                      header.column.getToggleSortingHandler()?.(e);
                    }
                  }
                "
              >
                <ChevronUpIcon
                  v-if="header.column.getIsSorted() === 'asc'"
                  class="shrink-0 opacity-60"
                  :size="16"
                  aria-hidden="true"
                />
                <ChevronDownIcon
                  v-else-if="header.column.getIsSorted() === 'desc'"
                  class="shrink-0 opacity-60"
                  :size="16"
                  aria-hidden="true"
                />
                <ChevronUpIcon
                  v-else
                  class="shrink-0 opacity-0 group-hover:opacity-60"
                  :size="16"
                  aria-hidden="true"
                />
              </Button>
            </div>
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
            <TableCell
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              class="truncate"
            >
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>
        <TableRow v-else>
          <TableCell :colspan="columns.length" class="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Draggable columns made with
      <a
        class="hover:text-foreground underline"
        href="https://tanstack.com/table"
        target="_blank"
        rel="noopener noreferrer"
      >
        TanStack Table
      </a>
      and
      <a href="https://dndkit.com/" target="_blank" rel="noopener noreferrer">
        dnd kit
      </a>
    </p>
  </div>
</template>
