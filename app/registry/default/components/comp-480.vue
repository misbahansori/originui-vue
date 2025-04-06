<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
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
import { h, onMounted, ref } from "vue";

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
  performance: "Good" | "Very Good" | "Excellent" | "Outstanding";
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

const data = ref<Item[]>([]);
const sorting = ref<SortingState>([]);

onMounted(async () => {
  const res = await fetch(
    "https://res.cloudinary.com/dlzlfasou/raw/upload/users-01_fertyx.json",
  );
  const jsonData = await res.json();
  data.value = jsonData.slice(0, 5); // Limit to 5 items
});

const table = useVueTable({
  get data() {
    return data.value;
  },
  columns,
  columnResizeMode: "onChange",
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
  enableColumnPinning: true,
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
            class="relative h-10 border-t select-none last:[&>.cursor-col-resize]:opacity-0"
            :colspan="header.colSpan"
            :style="{
              width: header.getSize() + 'px',
            }"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="truncate" v-if="!header.isPlaceholder">
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </span>
              <!-- Pin/Unpin column controls with enhanced accessibility -->
              <template
                v-if="!header.isPlaceholder && header.column.getCanPin()"
              >
                <Button
                  v-if="header.column.getIsPinned()"
                  variant="ghost"
                  size="icon"
                  class="-mr-1 size-7 shadow-none"
                  @click="header.column.pin(false)"
                  :aria-label="`Unpin ${header.column.columnDef.header} column`"
                  :title="`Unpin ${header.column.columnDef.header} column`"
                >
                  <Icon name="lucide:pin-off" class="size-4 opacity-60" />
                </Button>
                <DropdownMenu v-else>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="-mr-1 size-7 shadow-none"
                      :aria-label="`Pin options for ${header.column.columnDef.header} column`"
                      :title="`Pin options for ${header.column.columnDef.header} column`"
                    >
                      <Icon name="lucide:ellipsis" class="size-4 opacity-60" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem @click="header.column.pin('left')">
                      <Icon
                        name="lucide:arrow-left-to-line"
                        class="size-4 opacity-60"
                      />
                      Stick to left
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="header.column.pin('right')">
                      <Icon
                        name="lucide:arrow-right-to-line"
                        class="size-4 opacity-60"
                      />
                      Stick to right
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </template>
              <div
                v-if="header.column.getCanResize()"
                @dblclick="header.column.resetSize()"
                @mousedown="header.getResizeHandler()?.($event)"
                @touchstart="header.getResizeHandler()?.($event)"
                class="user-select-none before:bg-border absolute top-0 -right-2 z-10 flex h-full w-4 cursor-col-resize touch-none justify-center before:absolute before:inset-y-0 before:w-px before:translate-x-px"
              />
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
      Pinnable columns made with
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

<style scoped>
/* Remove the old dropdown styles since we're using the DropdownMenu component */
</style>
