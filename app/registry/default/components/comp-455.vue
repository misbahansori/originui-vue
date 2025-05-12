<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import { LucideArrowLeft, LucideArrowRight } from "lucide-vue-next";
</script>

<template>
  <Pagination :defaultPage="1" :itemsPerPage="10" :total="50">
    <PaginationList class="flex w-full items-center justify-between gap-3">
      <PaginationPrevious asChild>
        <Button variant="ghost" class="group h-9 w-auto px-4">
          <LucideArrowLeft
            class="size-4 opacity-60 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Previous
        </Button>
      </PaginationPrevious>
      <PaginationNext asChild>
        <Button variant="ghost" class="group h-9 w-auto px-4">
          Next
          <LucideArrowRight
            class="size-4 opacity-60 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
