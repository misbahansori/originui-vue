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
      class="flex w-full items-center justify-center gap-0 -space-x-px"
      v-slot="{ items }"
    >
      <PaginationPrev asChild>
        <Button
          variant="outline"
          class="size-9 rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
        >
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
            variant="outline"
            class="size-9 rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
            :class="item.value === page && 'bg-accent'"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-if="item.type === 'ellipsis'" asChild>
          <Button
            variant="outline"
            class="size-9 rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
          >
            <Icon name="lucide:ellipsis" aria-hidden="true" class="size-4" />
          </Button>
        </PaginationEllipsis>
      </template>
      <PaginationNext asChild>
        <Button
          variant="outline"
          class="size-9 rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
        >
          <Icon name="lucide:chevron-right" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
