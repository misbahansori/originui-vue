<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import { useId } from "vue";

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  },
];

const id = useId();
</script>

<template>
  <div>
    <div class="bg-background overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow class="hover:bg-transparent">
            <TableHead class="h-11">
              <Checkbox :id="id" />
            </TableHead>
            <TableHead class="h-11">Name</TableHead>
            <TableHead class="h-11">Email</TableHead>
            <TableHead class="h-11">Location</TableHead>
            <TableHead class="h-11">Status</TableHead>
            <TableHead class="h-11 text-right">Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="item in items" :key="item.id">
            <TableCell>
              <Checkbox :id="`table-checkbox-${item.id}`" />
            </TableCell>
            <TableCell class="font-medium">{{ item.name }}</TableCell>
            <TableCell>{{ item.email }}</TableCell>
            <TableCell>{{ item.location }}</TableCell>
            <TableCell>{{ item.status }}</TableCell>
            <TableCell class="text-right">{{ item.balance }}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter class="bg-transparent">
          <TableRow class="hover:bg-transparent">
            <TableCell :colspan="5">Total</TableCell>
            <TableCell class="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-sm">Card Table</p>
  </div>
</template>
