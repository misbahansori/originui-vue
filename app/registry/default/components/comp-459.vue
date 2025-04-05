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
      <PaginationPrev asChild>
        <Button variant="ghost" class="h-9 w-auto px-4">
          <Icon name="lucide:chevron-left" aria-hidden="true" class="size-4" />
          Previous
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
        <Button variant="ghost" class="h-9 w-auto px-4">
          Next
          <Icon name="lucide:chevron-right" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
