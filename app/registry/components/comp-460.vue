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
