<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationLast,
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
    <PaginationContent class="flex w-full items-center justify-center gap-1">
      <PaginationFirst>
        <LucideChevronFirst aria-hidden="true" class="size-4" />
      </PaginationFirst>
      <PaginationPrevious>
        <LucideChevronLeft aria-hidden="true" class="size-4" />
      </PaginationPrevious>
      <Select defaultValue="10" aria-label="Results per page">
        <SelectTrigger
          id="results-per-page"
          class="w-fit whitespace-break-spaces"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem :value="`${item}`" v-for="item in pageCount">
            Page {{ item }}
          </SelectItem>
        </SelectContent>
      </Select>
      <PaginationNext>
        <LucideChevronRight aria-hidden="true" class="size-4" />
      </PaginationNext>
      <PaginationLast>
        <LucideChevronLast aria-hidden="true" class="size-4" />
      </PaginationLast>
    </PaginationContent>
  </Pagination>
</template>
