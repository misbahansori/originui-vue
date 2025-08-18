<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationContent,
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
  >
    <PaginationContent class="flex w-full items-center justify-between gap-3">
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <div class="flex items-center gap-3">
        <PaginationPrevious asChild>
          <Button variant="outline" class="h-9 w-auto px-4">Previous</Button>
        </PaginationPrevious>
        <PaginationNext asChild>
          <Button variant="outline" class="h-9 w-auto px-4">Next</Button>
        </PaginationNext>
      </div>
    </PaginationContent>
  </Pagination>
</template>
