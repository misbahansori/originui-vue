<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        class="rounded-full shadow-none"
        aria-label="Open edit menu"
      >
        <Icon name="lucide:info" class="size-4" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="pb-2">
      <DropdownMenuLabel>Need help?</DropdownMenuLabel>
      <DropdownMenuItem
        class="cursor-pointer py-1 focus:bg-transparent focus:underline"
        asChild
      >
        <a href="#">
          <Icon
            name="lucide:book"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Documentation
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem
        class="cursor-pointer py-1 focus:bg-transparent focus:underline"
        asChild
      >
        <a href="#">
          <Icon
            name="lucide:life-buoy"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Support
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem
        class="cursor-pointer py-1 focus:bg-transparent focus:underline"
        asChild
      >
        <a href="#">
          <Icon
            name="lucide:message-circle-more"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Contact us
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
