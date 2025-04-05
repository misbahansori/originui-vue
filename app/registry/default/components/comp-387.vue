<script setup>
const id = useId();
const code = ref("https://originui.com/Avx8HD");

const { copy, copied } = useClipboard();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Share</Button>
      </PopoverTrigger>
      <PopoverContent class="w-72">
        <div class="flex flex-col gap-3 text-center">
          <div class="text-sm font-medium">Share code</div>
          <div class="flex flex-wrap justify-center gap-2">
            <Button size="icon" variant="outline" aria-label="Embed">
              <Icon name="ri:code-fill" class="size-4" aria-hidden="true" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Share on Twitter">
              <Icon
                name="ri:twitter-x-fill"
                class="size-4"
                aria-hidden="true"
              />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="Share on Facebook"
            >
              <Icon name="ri:facebook-fill" class="size-4" aria-hidden="true" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Share via email">
              <Icon name="ri:mail-line" class="size-4" aria-hidden="true" />
            </Button>
          </div>
          <div class="space-y-2">
            <div class="relative">
              <Input
                :id="id"
                class="pe-9"
                type="text"
                v-model="code"
                aria-label="Share link"
                readonly
              />
              <TooltipProvider :delay-duration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      @click="() => copy(code)"
                      class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                      :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
                      :disabled="copied"
                    >
                      <div
                        :class="[
                          'transition-all',
                          copied
                            ? 'scale-100 opacity-100'
                            : 'scale-0 opacity-0',
                        ]"
                      >
                        <Icon
                          name="lucide:check"
                          class="size-4 stroke-emerald-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div
                        :class="[
                          'absolute transition-all',
                          copied
                            ? 'scale-0 opacity-0'
                            : 'scale-100 opacity-100',
                        ]"
                      >
                        <Icon
                          name="lucide:copy"
                          class="size-4"
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent class="px-2 py-1 text-xs">
                    Copy to clipboard
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
