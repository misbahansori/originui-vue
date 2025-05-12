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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
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
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <div class="flex items-center gap-1">
        <PaginationPrevious asChild>
          <Button variant="ghost" class="size-9">
            <LucideChevronLeft aria-hidden="true" class="size-4" />
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
          <Button variant="ghost" class="size-9">
            <LucideChevronRight aria-hidden="true" class="size-4" />
          </Button>
        </PaginationNext>
      </div>
      <div className="flex flex-1 justify-end">
        <Select defaultValue="10" aria-label="Results per page">
          <SelectTrigger
            id="results-per-page"
            class="w-fit whitespace-break-spaces"
          >
            <SelectValue placeholder="Please select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 / page</SelectItem>
            <SelectItem value="20">20 / page</SelectItem>
            <SelectItem value="50">50 / page</SelectItem>
            <SelectItem value="100">100 / page</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </PaginationList>
  </Pagination>
</template>
