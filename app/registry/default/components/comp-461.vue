<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import { LucideChevronLeft, LucideChevronRight, LucideEllipsis } from "lucide-vue-next";
</script>

<template>
  <Pagination
    :defaultPage="1"
    :itemsPerPage="10"
    :total="100"
    v-slot="{ page }"
    :showEdges="true"
    :siblingCount="0"
  >
    <PaginationContent
      class="flex w-full items-center justify-center gap-0 -space-x-px"
      v-slot="{ items }"
    >
      <PaginationPrevious asChild>
        <Button
          variant="outline"
          class="size-9 rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
        >
          <LucideChevronLeft :size="16" aria-hidden="true" />
        </Button>
      </PaginationPrevious>
      <template v-for="item in items">
        <PaginationItem v-if="item.type === 'page'" :value="item.value" asChild>
          <Button
            variant="outline"
            class="size-9 rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
            :class="item.value === page && 'bg-accent'"
          >
            {{ item.value }}
          </Button>
        </PaginationItem>
        <PaginationEllipsis v-if="item.type === 'ellipsis'" asChild>
          <Button
            variant="outline"
            class="size-9 rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
          >
            <LucideEllipsis :size="16" aria-hidden="true" />
          </Button>
        </PaginationEllipsis>
      </template>
      <PaginationNext asChild>
        <Button
          variant="outline"
          class="size-9 rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
        >
          <LucideChevronRight :size="16" aria-hidden="true" />
        </Button>
      </PaginationNext>
    </PaginationContent>
  </Pagination>
</template>
