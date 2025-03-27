<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        class="rounded-full shadow-none"
        aria-label="Open edit menu"
      >
        <Icon name="lucide:plus" class="size-4" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="pb-2">
      <DropdownMenuLabel>Add block</DropdownMenuLabel>
      <DropdownMenuItem>
        <div
          class="bg-background flex size-8 items-center justify-center rounded-md border"
          aria-hidden="true"
        >
          <Icon name="lucide:type" class="size-4 opacity-60" />
        </div>
        <div>
          <div class="text-sm font-medium">Text</div>
          <div class="text-muted-foreground text-xs">
            Start writing with plain text
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div
          class="bg-background flex size-8 items-center justify-center rounded-md border"
          aria-hidden="true"
        >
          <Icon name="lucide:text-quote" class="size-4 opacity-60" />
        </div>
        <div>
          <div class="text-sm font-medium">Quote</div>
          <div class="text-muted-foreground text-xs">Capture a quote</div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div
          class="bg-background flex size-8 items-center justify-center rounded-md border"
          aria-hidden="true"
        >
          <Icon name="lucide:minus" class="size-4 opacity-60" />
        </div>
        <div>
          <div class="text-sm font-medium">Divider</div>
          <div class="text-muted-foreground text-xs">
            Visually divide blocks
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div
          class="bg-background flex size-8 items-center justify-center rounded-md border"
          aria-hidden="true"
        >
          <Icon name="lucide:heading-1" class="size-4 opacity-60" />
        </div>
        <div>
          <div class="text-sm font-medium">Heading 1</div>
          <div class="text-muted-foreground text-xs">Big section heading</div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div
          class="bg-background flex size-8 items-center justify-center rounded-md border"
          aria-hidden="true"
        >
          <Icon name="lucide:heading-2" class="size-4 opacity-60" />
        </div>
        <div>
          <div class="text-sm font-medium">Heading 2</div>
          <div class="text-muted-foreground text-xs">
            Medium section subheading
          </div>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
