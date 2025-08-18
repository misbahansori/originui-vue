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
    <PaginationContent
      class="flex w-full items-center justify-center gap-1"
      v-slot="{ items }"
    >
      <PaginationPrevious />
      <template v-for="item in items">
        <PaginationItem v-if="item.type === 'page'" :value="item.value" asChild>
          <Button
            :variant="item.value === page ? 'outline' : 'ghost'"
            class="size-9"
          >
            {{ item.value }}
          </Button>
        </PaginationItem>
        <PaginationEllipsis v-if="item.type === 'ellipsis'" />
      </template>
      <PaginationNext />
    </PaginationContent>
  </Pagination>
</template>
