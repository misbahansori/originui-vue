<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import { LucideArrowLeft, LucideArrowRight } from "lucide-vue-next";
</script>

<template>
  <Pagination :defaultPage="1" :itemsPerPage="10" :total="50">
    <PaginationContent class="flex w-full items-center justify-between gap-3">
      <PaginationPrevious>
        <LucideArrowLeft />
        <span class="hidden sm:block">Previous</span>
      </PaginationPrevious>
      <PaginationNext>
        <LucideArrowRight />
        <span class="hidden sm:block">Next</span>
      </PaginationNext>
    </PaginationContent>
  </Pagination>
</template>
