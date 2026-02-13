<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
</script>

<template>
  <Pagination :defaultPage="1" :itemsPerPage="10" :total="100" v-slot="{ page, pageCount }">
    <PaginationContent class="flex w-full items-center justify-center gap-3">
      <PaginationPrevious>
        <LucideChevronLeft aria-hidden="true" class="size-4" />
      </PaginationPrevious>
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <PaginationNext>
        <LucideChevronRight aria-hidden="true" class="size-4" />
      </PaginationNext>
    </PaginationContent>
  </Pagination>
</template>
