<template>
  <Pagination
    :defaultPage="1"
    :itemsPerPage="10"
    :total="100"
    v-slot="{ page, pageCount }"
  >
    <PaginationList class="flex w-full items-center justify-center gap-3">
      <PaginationPrev asChild>
        <Button variant="ghost" class="size-9">
          <Icon name="lucide:chevron-left" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationPrev>
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <PaginationNext asChild>
        <Button variant="ghost" class="size-9">
          <Icon name="lucide:chevron-right" aria-hidden="true" class="size-4" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>
