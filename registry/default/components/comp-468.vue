<script setup lang="ts">
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
</script>

<template>
  <div>
    <Table>
      <TableHeader>
        <TableRow class="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead class="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <tbody aria-hidden="true" class="table-row h-2"></tbody>
      <TableBody
        class="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg"
      >
        <TableRow v-for="item in items" :key="item.id" class="border-none">
          <TableCell class="py-2.5 font-medium">{{ item.name }}</TableCell>
          <TableCell class="py-2.5">{{ item.email }}</TableCell>
          <TableCell class="py-2.5">{{ item.location }}</TableCell>
          <TableCell class="py-2.5">{{ item.status }}</TableCell>
          <TableCell class="py-2.5 text-right">
            {{ item.balance }}
          </TableCell>
        </TableRow>
      </TableBody>
      <tbody aria-hidden="true" class="table-row h-2"></tbody>
      <TableFooter class="bg-transparent">
        <TableRow class="hover:bg-transparent">
          <TableCell :colspan="4">Total</TableCell>
          <TableCell class="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Table without horizontal dividers
    </p>
  </div>
</template>
