<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationFirst,
  PaginationLast,
  PaginationList,
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
import {
  LucideChevronFirst,
  LucideChevronLast,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
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
      class="flex w-full items-center justify-between gap-1"
      v-slot="{ items }"
    >
      <div class="flex items-center gap-3">
        <Label :for="id">Rows per page</Label>
        <Select defaultValue="10">
          <SelectTrigger :id="id" class="w-fit whitespace-nowrap">
            <SelectValue placeholder="Please select" />
          </SelectTrigger>
          <SelectContent
            className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
          >
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <div class="flex items-center gap-1">
        <PaginationFirst asChild>
          <Button variant="ghost" class="size-9">
            <LucideChevronFirst aria-hidden="true" class="size-4" />
          </Button>
        </PaginationFirst>
        <PaginationPrevious asChild>
          <Button variant="ghost" class="size-9">
            <LucideChevronLeft aria-hidden="true" class="size-4" />
          </Button>
        </PaginationPrevious>
        <PaginationNext asChild>
          <Button variant="ghost" class="size-9">
            <LucideChevronRight aria-hidden="true" class="size-4" />
          </Button>
        </PaginationNext>
        <PaginationLast asChild>
          <Button variant="ghost" class="size-9">
            <LucideChevronLast aria-hidden="true" class="size-4" />
          </Button>
        </PaginationLast>
      </div>
    </PaginationList>
  </Pagination>
</template>
