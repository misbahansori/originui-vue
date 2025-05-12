<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
</script>

<template>
  <Pagination
    :defaultPage="1"
    :itemsPerPage="10"
    :total="100"
    v-slot="{ page, pageCount }"
    :showEdges="true"
    :siblingCount="0"
  >
    <PaginationList
      class="flex w-full items-center justify-center gap-1"
      v-slot="{ items }"
    >
      <PaginationPrevious asChild>
        <Button variant="ghost" class="h-9 w-auto px-4">
          <LucideChevronLeft aria-hidden="true" class="size-4" />
          Previous
        </Button>
      </PaginationPrevious>
      <template v-for="item in items">
        <PaginationListItem
          v-if="item.type === 'page'"
          :value="item.value"
          asChild
        >
          <Button
            :variant="item.value === page ? 'outline' : 'ghost'"
            class="size-9"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-if="item.type === 'ellipsis'" />
      </template>
      <PaginationNext asChild>
        <Button variant="ghost" class="h-9 w-auto px-4">
          Next
          <LucideChevronRight aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
