<script setup lang="ts">
const { copy, copied } = useClipboard();
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          class="disabled:opacity-100"
          @click="copy('Sample text')"
          :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
          :disabled="copied"
        >
          <div
            :class="[
              'transition-all',
              copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
            ]"
          >
            <Icon
              name="lucide:check"
              class="stroke-emerald-500"
              size="16"
              aria-hidden="true"
            />
          </div>
          <div
            :class="[
              'absolute transition-all',
              copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
            ]"
          >
            <Icon name="lucide:copy" size="16" aria-hidden="true" />
          </div>
        </Button>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">Click to copy</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
