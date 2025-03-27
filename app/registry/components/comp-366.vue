<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        class="rounded-full shadow-none"
        aria-label="Open edit menu"
      >
        <Icon name="lucide:ellipsis" class="size-4" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
      <DropdownMenuItem>Option 3</DropdownMenuItem>
      <DropdownMenuItem>Option 4</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
