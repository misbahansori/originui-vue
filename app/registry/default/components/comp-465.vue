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
      <div class="flex items-center gap-3">
        <Label :for="id" class="whitespace-nowrap">Go to page</Label>
        <Input :id="id" type="text" class="w-14" :defaultValue="page" />
      </div>
    </PaginationList>
  </Pagination>
</template>
