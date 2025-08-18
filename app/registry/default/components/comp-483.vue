<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationContent,
} from "@/registry/default/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
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
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
  type ColumnDef,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
} from "@tanstack/vue-table";
import {
  LucideChevronFirst,
  LucideChevronLast,
  LucideChevronLeft,
  LucideChevronRight,
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

const data = ref<Item[]>([]);
const rowSelection = ref<RowSelectionState>({});

const pagination = ref<PaginationState>({
  pageIndex: 0,
  pageSize: 5,
});
const sorting = ref<SortingState>([
  {
    id: "name",
    desc: false,
  },
]);

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
    size: 28,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => h("div", { class: "font-medium" }, row.getValue("name")),
    size: 180,
  },
  {
    header: "Email",
    accessorKey: "email",
    size: 200,
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) =>
      h("div", {}, [
        h(
          "span",
          { class: "text-lg leading-none" },
          row.original.flag as string,
        ),
        " ",
        row.getValue("location") as string,
      ]),
    size: 180,
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
    size: 120,
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
    size: 120,
  },
];

onMounted(async () => {
  try {
    const res = await $fetch("/api/users");

    data.value = [...res, ...res];
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
  getPaginationRowModel: getPaginationRowModel(),
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  onPaginationChange: (updaterOrValue) => {
    pagination.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(pagination.value)
        : updaterOrValue;
  },
  enableSortingRemoval: false,
  state: {
    get rowSelection() {
      return rowSelection.value;
    },
    get pagination() {
      return pagination.value;
    },
    get sorting() {
      return sorting.value;
    },
  },
  onRowSelectionChange: (updaterOrValue) => {
    rowSelection.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(rowSelection.value)
        : updaterOrValue;
  },
});
</script>

<template>
  <div class="space-y-4">
    <div class="bg-background overflow-hidden rounded-md border">
      <Table class="table-fixed">
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
            class="hover:bg-transparent"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              :style="{ width: `${header.getSize()}px` }"
              class="h-11"
            >
              <template v-if="!header.isPlaceholder">
                <div
                  v-if="header.column.getCanSort()"
                  class="flex h-full cursor-pointer items-center justify-between gap-2 select-none"
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
                  tabindex="0"
                >
                  <FlexRender
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
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
          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="flex items-center justify-between gap-8">
      <div class="flex items-center gap-3">
        <Label class="max-sm:sr-only">Rows per page</Label>
        <Select
          :model-value="table.getState().pagination.pageSize.toString()"
          @update:model-value="(value) => table.setPageSize(Number(value))"
        >
          <SelectTrigger class="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent
            class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
          >
            <SelectItem
              v-for="pageSize in [5, 10, 25, 50]"
              :key="pageSize"
              :value="pageSize.toString()"
            >
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        class="text-muted-foreground flex grow justify-end text-sm whitespace-nowrap"
      >
        <p
          class="text-muted-foreground text-sm whitespace-nowrap"
          aria-live="polite"
        >
          <span class="text-foreground">
            {{
              table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
              1
            }}-{{
              Math.min(
                Math.max(
                  table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    table.getState().pagination.pageSize,
                  0,
                ),
                table.getRowCount(),
              )
            }}
          </span>
          of
          <span class="text-foreground">
            {{ table.getRowCount().toString() }}
          </span>
        </p>
      </div>

      <div>
        <Pagination
          :default-page="table.getState().pagination.pageIndex + 1"
          :items-per-page="table.getState().pagination.pageSize"
          :total="table.getRowCount()"
        >
          <PaginationContent>
            <PaginationFirst asChild>
              <Button
                variant="outline"
                class="size-9"
                @click="table.firstPage()"
                :disabled="!table.getCanPreviousPage()"
              >
                <LucideChevronFirst :size="16" aria-hidden="true" />
              </Button>
            </PaginationFirst>
            <PaginationPrevious asChild>
              <Button
                variant="outline"
                class="size-9"
                @click="table.previousPage()"
                :disabled="!table.getCanPreviousPage()"
              >
                <LucideChevronLeft :size="16" aria-hidden="true" />
              </Button>
            </PaginationPrevious>
            <PaginationNext asChild>
              <Button
                variant="outline"
                class="size-9"
                @click="table.nextPage()"
                :disabled="!table.getCanNextPage()"
              >
                <LucideChevronRight :size="16" aria-hidden="true" />
              </Button>
            </PaginationNext>
            <PaginationLast asChild>
              <Button
                variant="outline"
                class="size-9"
                @click="table.lastPage()"
                :disabled="!table.getCanNextPage()"
              >
                <LucideChevronLast :size="16" aria-hidden="true" />
              </Button>
            </PaginationLast>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Paginated table made with
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
