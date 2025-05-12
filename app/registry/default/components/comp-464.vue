<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  LucideChevronFirst,
  LucideChevronLast,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-vue-next";
</script>

<template>
  <Pagination
    :defaultPage="1"
    :itemsPerPage="10"
    :total="100"
    v-slot="{ page, pageCount }"
    :showEdges="false"
    :siblingCount="0"
  >
    <PaginationList class="flex w-full items-center justify-center gap-1">
      <PaginationFirst asChild>
        <Button variant="ghost" class="size-9">
          <LucideChevronFirst aria-hidden="true" class="size-4" />
        </Button>
      </PaginationFirst>
      <PaginationPrevious asChild>
        <Button variant="ghost" class="size-9">
          <LucideChevronLeft aria-hidden="true" class="size-4" />
        </Button>
      </PaginationPrevious>
      <Select defaultValue="10" aria-label="Results per page">
        <SelectTrigger
          id="results-per-page"
          class="w-fit whitespace-break-spaces"
        >
          <SelectValue placeholder="Please select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem :value="`${item}`" v-for="item in pageCount">
            Page {{ item }}
          </SelectItem>
        </SelectContent>
      </Select>
      <PaginationNext asChild>
        <Button variant="ghost" class="size-9">
          <LucideChevronRight aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
      <PaginationLast asChild>
        <Button variant="ghost" class="size-9">
          <LucideChevronLast aria-hidden="true" class="size-4" />
        </Button>
      </PaginationLast>
    </PaginationList>
  </Pagination>
</template>
