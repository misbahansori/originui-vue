<template>
  <Pagination :defaultPage="1" :itemsPerPage="10" :total="50">
    <PaginationList class="flex w-full items-center justify-between gap-3">
      <PaginationPrev asChild>
        <Button variant="outline" class="h-9 w-auto px-4">
          <Icon
            name="lucide:chevron-left"
            aria-hidden="true"
            class="size-4 opacity-60"
          />
          Previous
        </Button>
      </PaginationPrev>
      <PaginationNext asChild>
        <Button variant="outline" class="h-9 w-auto px-4">
          Next
          <Icon
            name="lucide:chevron-right"
            aria-hidden="true"
            class="size-4 opacity-60"
          />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
