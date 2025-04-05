<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Same width of trigger
        <Icon
          name="lucide:chevron-down"
          class="-me-1 size-4 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-(--reka-dropdown-menu-trigger-width)">
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
      <DropdownMenuItem>Option 3</DropdownMenuItem>
      <DropdownMenuItem>Option 4</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
