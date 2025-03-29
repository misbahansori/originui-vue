<template>
  <Pagination
    :defaultPage="1"
    :itemsPerPage="10"
    :total="100"
    v-slot="{ page, pageCount }"
    :showEdges="false"
    :siblingCount="0"
  >
    <PaginationList class="flex w-full items-center justify-center gap-1">
      <PaginationFirst asChild>
        <Button variant="ghost" class="size-9">
          <Icon name="lucide:chevron-first" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationFirst>
      <PaginationPrev asChild>
        <Button variant="ghost" class="size-9">
          <Icon name="lucide:chevron-left" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationPrev>
      <Select defaultValue="10" aria-label="Results per page">
        <SelectTrigger
          id="results-per-page"
          class="w-fit whitespace-break-spaces"
        >
          <SelectValue placeholder="Select number of results" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem :value="`${item}`" v-for="item in pageCount">
            Page {{ item }}
          </SelectItem>
        </SelectContent>
      </Select>
      <PaginationNext asChild>
        <Button variant="ghost" class="size-9">
          <Icon name="lucide:chevron-right" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
      <PaginationLast asChild>
        <Button variant="ghost" class="size-9">
          <Icon name="lucide:chevron-last" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationLast>
    </PaginationList>
  </Pagination>
</template>
