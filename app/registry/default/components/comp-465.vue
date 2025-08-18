<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
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
    v-slot="{ page }"
    :showEdges="true"
    :siblingCount="0"
  >
    <PaginationContent
      class="flex w-full items-center justify-between gap-1"
      v-slot="{ items }"
    >
      <div class="flex items-center gap-1">
        <PaginationPrevious>
          <LucideChevronLeft aria-hidden="true" class="size-4" />
        </PaginationPrevious>
        <template v-for="item in items">
          <PaginationItem
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
          </PaginationItem>
          <PaginationEllipsis v-if="item.type === 'ellipsis'" />
        </template>
        <PaginationNext>
          <LucideChevronRight aria-hidden="true" class="size-4" />
        </PaginationNext>
      </div>
      <div class="flex items-center gap-3">
        <Label :for="id" class="whitespace-nowrap">Go to page</Label>
        <Input :id="id" type="text" class="w-14" :defaultValue="page" />
      </div>
    </PaginationContent>
  </Pagination>
</template>
