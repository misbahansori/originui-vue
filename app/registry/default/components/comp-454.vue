<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrev,
} from "@/registry/default/ui/pagination";
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
</script>

<template>
  <Pagination :defaultPage="1" :itemsPerPage="10" :total="50">
    <PaginationList class="flex w-full items-center justify-between gap-3">
      <PaginationPrev asChild>
        <Button variant="outline" class="h-9 w-auto px-4">
          <LucideChevronLeft aria-hidden="true" class="size-4 opacity-60" />
          Previous
        </Button>
      </PaginationPrev>
      <PaginationNext asChild>
        <Button variant="outline" class="h-9 w-auto px-4">
          Next
          <LucideChevronRight aria-hidden="true" class="size-4 opacity-60" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
