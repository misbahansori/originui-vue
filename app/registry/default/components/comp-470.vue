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
      <TableHeader class="bg-transparent">
        <TableRow
          class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
        >
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead class="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody
        class="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg"
      >
        <TableRow
          v-for="item in items"
          :key="item.id"
          class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
        >
          <TableCell class="font-medium">{{ item.name }}</TableCell>
          <TableCell>{{ item.email }}</TableCell>
          <TableCell>{{ item.location }}</TableCell>
          <TableCell>{{ item.status }}</TableCell>
          <TableCell class="text-right">{{ item.balance }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Table with vertical lines
    </p>
  </div>
</template>
