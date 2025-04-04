<script setup lang="ts">
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  type ColumnDef,
} from "@tanstack/vue-table";
import { Badge } from "~/registry/components/ui/badge";
import { Checkbox } from "~/registry/components/ui/checkbox";

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};

const data = shallowRef<Item[]>([]);

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
    cell: ({ row }) =>
      h(
        Badge,
        {
          class: cn(
            row.getValue("status") === "Inactive" &&
              "bg-muted-foreground/60 text- primary-foreground",
          ),
        },
        row.getValue("status"),
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
  const res = await fetch(
    "https://res.cloudinary.com/dlzlfasou/raw/upload/users-01_fertyx.json",
  );
  const json = await res.json();
  data.value = json.slice(0, 5); // Limit to 5 items
});

const table = useVueTable({
  get data() {
    return data.value;
  },
  get columns() {
    return columns;
  },
  getCoreRowModel: getCoreRowModel(),
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
              :render="header.column.columnDef.header"
              :props="header.getContext()"
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
      <TableFooter class="bg-transparent">
        <TableRow class="hover:bg-transparent">
          <TableCell :colspan="5">Total</TableCell>
          <TableCell class="text-right">
            {{
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(data.reduce((total, item) => total + item.balance, 0))
            }}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Basic data table made with
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
