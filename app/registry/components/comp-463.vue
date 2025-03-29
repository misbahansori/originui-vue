<script setup lang="ts">
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
      <div class="flex items-center gap-3">
        <Label :for="id">Rows per page</Label>
        <Select defaultValue="25">
          <SelectTrigger :id="id" class="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent
            className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
          >
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <p class="text-muted-foreground text-sm" aria-live="polite">
        Page
        <span class="text-foreground">{{ page }}</span>
        of
        <span class="text-foreground">{{ pageCount }}</span>
      </p>
      <div class="flex items-center gap-1">
        <PaginationFirst asChild>
          <Button variant="ghost" class="size-9">
            <Icon
              name="lucide:chevron-first"
              aria-hidden="true"
              class="size-4"
            />
          </Button>
        </PaginationFirst>
        <PaginationPrev asChild>
          <Button variant="ghost" class="size-9">
            <Icon
              name="lucide:chevron-left"
              aria-hidden="true"
              class="size-4"
            />
          </Button>
        </PaginationPrev>
        <PaginationNext asChild>
          <Button variant="ghost" class="size-9">
            <Icon
              name="lucide:chevron-right"
              aria-hidden="true"
              class="size-4"
            />
          </Button>
        </PaginationNext>
        <PaginationLast asChild>
          <Button variant="ghost" class="size-9">
            <Icon
              name="lucide:chevron-last"
              aria-hidden="true"
              class="size-4"
            />
          </Button>
        </PaginationLast>
      </div>
    </PaginationList>
  </Pagination>
</template>
