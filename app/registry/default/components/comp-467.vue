<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    username: "@alexthompson",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/avatar-40-02_upqrxi.jpg",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    username: "@sarahchen",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358073/avatar-40-01_ij9v7j.jpg",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    username: "@mariagarcia",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358072/avatar-40-03_dkeufx.jpg",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    username: "@davidkim",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358070/avatar-40-05_cmz0mg.jpg",
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
      <TableBody>
        <TableRow v-for="item in items" :key="item.id">
          <TableCell>
            <div class="flex items-center gap-3">
              <img
                class="rounded-full"
                :src="item.image"
                width="40"
                height="40"
                :alt="item.name"
              />
              <div>
                <div class="font-medium">{{ item.name }}</div>
                <span class="text-muted-foreground mt-0.5 text-xs">
                  {{ item.username }}
                </span>
              </div>
            </div>
          </TableCell>
          <TableCell>{{ item.email }}</TableCell>
          <TableCell>{{ item.location }}</TableCell>
          <TableCell>{{ item.status }}</TableCell>
          <TableCell class="text-right">{{ item.balance }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Table with images
    </p>
  </div>
</template>
