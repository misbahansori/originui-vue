<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="outline" aria-label="Open account menu">
        <Icon
          name="lucide:circle-user-round"
          class="size-4"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="max-w-64">
      <DropdownMenuLabel class="flex flex-col">
        <span>Signed in as</span>
        <span class="text-foreground text-xs font-normal">
          k.kennedy@originui.com
        </span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem>Option 3</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
