<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/default/ui/alert-dialog";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/registry/default/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
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
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/vue-table";
import {
  ChevronDownIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleXIcon,
  Columns3Icon,
  EllipsisIcon,
  FilterIcon,
  ListFilterIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-vue-next";
import { computed, h, onMounted, ref } from "vue";

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};

// Custom filter function for multi-column searching
const multiColumnFilterFn: FilterFn<Item> = (row, columnId, filterValue) => {
  const searchableRowContent =
    `${row.original.name} ${row.original.email}`.toLowerCase();
  const searchTerm = (filterValue ?? "").toLowerCase();
  return searchableRowContent.includes(searchTerm);
};

const statusFilterFn: FilterFn<Item> = (
  row,
  columnId,
  filterValue: string[],
) => {
  if (!filterValue?.length) return true;
  const status = row.getValue(columnId) as string;
  return filterValue.includes(status);
};

const data = ref<Item[]>([]);
const rowSelection = ref<RowSelectionState>({});
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const pagination = ref<PaginationState>({
  pageIndex: 0,
  pageSize: 10,
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
    enableHiding: false,
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => h("div", { class: "font-medium" }, row.getValue("name")),
    size: 180,
    filterFn: multiColumnFilterFn,
    enableHiding: false,
  },
  {
    header: "Email",
    accessorKey: "email",
    size: 220,
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
    size: 100,
    filterFn: statusFilterFn,
  },
  {
    header: "Performance",
    accessorKey: "performance",
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
  {
    id: "actions",
    header: () => h("span", { class: "sr-only" }, "Actions"),
    cell: ({ row }) => h(RowActions, { row }),
    size: 60,
    enableHiding: false,
  },
];

onMounted(async () => {
  try {
    const res = await $fetch("/api/users");
    data.value = res;
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
  getFilteredRowModel: getFilteredRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
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
  onColumnFiltersChange: (updaterOrValue) => {
    columnFilters.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(columnFilters.value)
        : updaterOrValue;
  },
  onColumnVisibilityChange: (updaterOrValue) => {
    columnVisibility.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(columnVisibility.value)
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
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
  },
  onRowSelectionChange: (updaterOrValue) => {
    rowSelection.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(rowSelection.value)
        : updaterOrValue;
  },
});

// Get unique status values
const uniqueStatusValues = computed(() => {
  const statusColumn = table.getColumn("status");
  if (!statusColumn) return [];
  const values = Array.from(statusColumn.getFacetedUniqueValues().keys());
  return values.sort();
});

// Get counts for each status
const statusCounts = computed(() => {
  const statusColumn = table.getColumn("status");
  if (!statusColumn) return new Map();
  return statusColumn.getFacetedUniqueValues();
});

const selectedStatuses = computed(() => {
  const filterValue = table.getColumn("status")?.getFilterValue() as string[];
  return filterValue ?? [];
});

const handleStatusChange = (checked: boolean, value: string) => {
  const filterValue = table.getColumn("status")?.getFilterValue() as string[];
  const newFilterValue = filterValue ? [...filterValue] : [];

  if (checked) {
    newFilterValue.push(value);
  } else {
    const index = newFilterValue.indexOf(value);
    if (index > -1) {
      newFilterValue.splice(index, 1);
    }
  }

  table
    .getColumn("status")
    ?.setFilterValue(newFilterValue.length ? newFilterValue : undefined);
};

const handleDeleteRows = () => {
  const selectedRows = table.getSelectedRowModel().rows;
  const updatedData = data.value.filter(
    (item) => !selectedRows.some((row) => row.original.id === item.id),
  );
  data.value = updatedData;
  table.resetRowSelection();
};

// RowActions component
const RowActions = ({ row }: { row: Row<Item> }) => {
  return h(
    DropdownMenu,
    {},
    {
      trigger: () =>
        h(DropdownMenuTrigger, { asChild: true }, () =>
          h("div", { class: "flex justify-end" }, [
            h(
              Button,
              {
                size: "icon",
                variant: "ghost",
                class: "shadow-none",
                "aria-label": "Edit item",
              },
              () => h(EllipsisIcon, { size: 16, "aria-hidden": "true" }),
            ),
          ]),
        ),
      default: () =>
        h(DropdownMenuContent, { align: "end" }, [
          h(DropdownMenuGroup, {}, [
            h(DropdownMenuItem, {}, [
              h("span", {}, "Edit"),
              h(DropdownMenuShortcut, {}, "⌘E"),
            ]),
            h(DropdownMenuItem, {}, [
              h("span", {}, "Duplicate"),
              h(DropdownMenuShortcut, {}, "⌘D"),
            ]),
          ]),
          h(DropdownMenuSeparator),
          h(DropdownMenuGroup, {}, [
            h(DropdownMenuItem, {}, [
              h("span", {}, "Archive"),
              h(DropdownMenuShortcut, {}, "⌘A"),
            ]),
            h(
              DropdownMenuSub,
              {},
              {
                trigger: () => h(DropdownMenuSubTrigger, {}, "More"),
                content: () =>
                  h(DropdownMenuPortal, {}, () =>
                    h(DropdownMenuSubContent, {}, [
                      h(DropdownMenuItem, {}, "Move to project"),
                      h(DropdownMenuItem, {}, "Move to folder"),
                      h(DropdownMenuSeparator),
                      h(DropdownMenuItem, {}, "Advanced options"),
                    ]),
                  ),
              },
            ),
          ]),
          h(DropdownMenuSeparator),
          h(DropdownMenuGroup, {}, [
            h(DropdownMenuItem, {}, "Share"),
            h(DropdownMenuItem, {}, "Add to favorites"),
          ]),
          h(DropdownMenuSeparator),
          h(
            DropdownMenuItem,
            { class: "text-destructive focus:text-destructive" },
            [h("span", {}, "Delete"), h(DropdownMenuShortcut, {}, "⌘⌫")],
          ),
        ]),
    },
  );
};
</script>

<template>
  <div class="space-y-4">
    <!-- Filters -->
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <!-- Filter by name or email -->
        <div class="relative">
          <Input
            class="peer min-w-60 ps-9"
            :class="
              Boolean(table.getColumn('name')?.getFilterValue()) && 'pe-9'
            "
            :model-value="
              (table.getColumn('name')?.getFilterValue() ?? '') as string
            "
            @update:model-value="
              (value) => table.getColumn('name')?.setFilterValue(value)
            "
            placeholder="Filter by name or email..."
            type="text"
            aria-label="Filter by name or email"
          />
          <div
            class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
          >
            <ListFilterIcon :size="16" aria-hidden="true" />
          </div>
          <button
            v-if="Boolean(table.getColumn('name')?.getFilterValue())"
            class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear filter"
            @click="
              () => {
                table.getColumn('name')?.setFilterValue('');
              }
            "
          >
            <CircleXIcon :size="16" aria-hidden="true" />
          </button>
        </div>
        <!-- Filter by status -->
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <FilterIcon
                class="-ms-1 opacity-60"
                :size="16"
                aria-hidden="true"
              />
              Status
              <span
                v-if="selectedStatuses.length > 0"
                class="bg-background text-muted-foreground/70 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
              >
                {{ selectedStatuses.length }}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto min-w-36 p-3" align="start">
            <div class="space-y-3">
              <div class="text-muted-foreground text-xs font-medium">
                Filters
              </div>
              <div class="space-y-3">
                <div
                  v-for="(value, i) in uniqueStatusValues"
                  :key="value"
                  class="flex items-center gap-2"
                >
                  <Checkbox
                    :id="`status-${i}`"
                    :model-value="selectedStatuses.includes(value)"
                    @update:model-value="
                      (checked: boolean | 'indeterminate') =>
                        handleStatusChange(!!checked, value)
                    "
                  />
                  <Label
                    :for="`status-${i}`"
                    class="flex grow justify-between gap-2 font-normal"
                  >
                    {{ value }}
                    <span class="text-muted-foreground ms-2 text-xs">
                      {{ statusCounts.get(value) }}
                    </span>
                  </Label>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <!-- Toggle columns visibility -->
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Columns3Icon
                class="-ms-1 opacity-60"
                :size="16"
                aria-hidden="true"
              />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              v-for="column in table
                .getAllColumns()
                .filter((column) => column.getCanHide())"
              :key="column.id"
              class="capitalize"
              :model-value="column.getIsVisible()"
              @update:model-value="(value) => column.toggleVisibility(!!value)"
              @select="(event) => event.preventDefault()"
            >
              {{ column.id }}
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div class="flex items-center gap-3">
        <!-- Delete button -->
        <AlertDialog v-if="table.getSelectedRowModel().rows.length > 0">
          <AlertDialogTrigger asChild>
            <Button class="ml-auto" variant="outline">
              <TrashIcon
                class="-ms-1 opacity-60"
                :size="16"
                aria-hidden="true"
              />
              Delete
              <span
                class="bg-background text-muted-foreground/70 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
              >
                {{ table.getSelectedRowModel().rows.length }}
              </span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <div
              class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4"
            >
              <div
                class="flex size-9 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <CircleAlertIcon class="opacity-80" :size="16" />
              </div>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  {{ table.getSelectedRowModel().rows.length }} selected
                  {{
                    table.getSelectedRowModel().rows.length === 1
                      ? "row"
                      : "rows"
                  }}.
                </AlertDialogDescription>
              </AlertDialogHeader>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction @click="handleDeleteRows">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <!-- Add user button -->
        <Button class="ml-auto" variant="outline">
          <PlusIcon class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
          Add user
        </Button>
      </div>
    </div>

    <!-- Table -->
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
              <TableCell
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                class="last:py-0"
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
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between gap-8">
      <!-- Results per page -->
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
      <!-- Page number information -->
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

      <!-- Pagination buttons -->
      <div>
        <Pagination
          :items-per-page="table.getState().pagination.pageSize"
          :total="table.getRowCount()"
        >
          <PaginationContent>
            <!-- First page button -->
            <PaginationItem :value="1">
              <Button
                size="icon"
                variant="outline"
                class="disabled:pointer-events-none disabled:opacity-50"
                @click="table.firstPage()"
                :disabled="!table.getCanPreviousPage()"
                aria-label="Go to first page"
              >
                <ChevronFirstIcon :size="16" aria-hidden="true" />
              </Button>
            </PaginationItem>
            <!-- Previous page button -->
            <PaginationItem :value="table.getState().pagination.pageIndex - 1">
              <Button
                size="icon"
                variant="outline"
                class="disabled:pointer-events-none disabled:opacity-50"
                @click="table.previousPage()"
                :disabled="!table.getCanPreviousPage()"
                aria-label="Go to previous page"
              >
                <ChevronLeftIcon :size="16" aria-hidden="true" />
              </Button>
            </PaginationItem>
            <!-- Next page button -->
            <PaginationItem :value="table.getState().pagination.pageIndex + 1">
              <Button
                size="icon"
                variant="outline"
                class="disabled:pointer-events-none disabled:opacity-50"
                @click="table.nextPage()"
                :disabled="!table.getCanNextPage()"
                aria-label="Go to next page"
              >
                <ChevronRightIcon :size="16" aria-hidden="true" />
              </Button>
            </PaginationItem>
            <!-- Last page button -->
            <PaginationItem
              :value="table.getPageCount() - 1"
              :disabled="!table.getCanNextPage()"
            >
              <Button
                size="icon"
                variant="outline"
                class="disabled:pointer-events-none disabled:opacity-50"
                @click="table.lastPage()"
                :disabled="!table.getCanNextPage()"
                aria-label="Go to last page"
              >
                <ChevronLastIcon :size="16" aria-hidden="true" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Example of a more complex table made with
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
