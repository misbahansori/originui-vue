<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
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
      <div class="flex items-center gap-3">
        <Label :for="id" class="whitespace-nowrap">Go to page</Label>
        <Input :id="id" type="text" class="w-14" :defaultValue="page" />
      </div>
    </PaginationList>
  </Pagination>
</template>
