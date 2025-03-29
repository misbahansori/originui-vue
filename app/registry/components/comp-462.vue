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
        <PaginationPrev asChild>
          <Button variant="ghost" class="size-9">
            <Icon
              name="lucide:chevron-left"
              aria-hidden="true"
              class="size-4"
            />
          </Button>
        </PaginationPrev>
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
            <Icon
              name="lucide:chevron-right"
              aria-hidden="true"
              class="size-4"
            />
          </Button>
        </PaginationNext>
      </div>
      <div className="flex flex-1 justify-end">
        <Select defaultValue="10" aria-label="Results per page">
          <SelectTrigger
            id="results-per-page"
            class="w-fit whitespace-break-spaces"
          >
            <SelectValue placeholder="Select number of results" />
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
