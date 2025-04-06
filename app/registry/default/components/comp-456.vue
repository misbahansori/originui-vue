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
  <Pagination
    :defaultPage="1"
    :itemsPerPage="10"
    :total="100"
    v-slot="{ page, pageCount }"
  >
    <PaginationList class="flex w-full items-center justify-between gap-3">
      <PaginationPrev asChild>
        <Button variant="outline" class="size-9">
          <LucideChevronLeft aria-hidden="true" class="size-4" />
        </Button>
      </PaginationPrev>
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <PaginationNext asChild>
        <Button variant="outline" class="size-9">
          <LucideChevronRight aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
