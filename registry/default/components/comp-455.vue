<template>
  <Pagination :defaultPage="1" :itemsPerPage="10" :total="50">
    <PaginationList class="flex w-full items-center justify-between gap-3">
      <PaginationPrev asChild>
        <Button variant="ghost" class="group h-9 w-auto px-4">
          <Icon
            name="lucide:arrow-left"
            class="size-4 opacity-60 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Previous
        </Button>
      </PaginationPrev>
      <PaginationNext asChild>
        <Button variant="ghost" class="group h-9 w-auto px-4">
          Next
          <Icon
            name="lucide:arrow-right"
            class="size-4 opacity-60 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
