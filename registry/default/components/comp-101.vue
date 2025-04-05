<script setup lang="ts">
const bookmarked = ref(false);

function toggleBookmark() {
  bookmarked.value = !bookmarked.value;
}
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <div>
          <Toggle
            class="group size-9 p-0 hover:bg-indigo-50 hover:text-indigo-500 data-[state=on]:bg-indigo-50 data-[state=on]:text-indigo-500"
            aria-label="Bookmark this"
            :pressed="bookmarked"
            @update:pressed="toggleBookmark"
          >
            <Icon name="lucide:bookmark" size="16" aria-hidden="true" />
          </Toggle>
        </div>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">
        <p>{{ bookmarked ? "Remove bookmark" : "Bookmark this" }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
