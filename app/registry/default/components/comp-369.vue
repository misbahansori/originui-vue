<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Grouped items
        <Icon
          name="lucide:chevron-down"
          class="-me-1 size-4 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon
            name="lucide:copy-plus"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="lucide:bolt"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Edit
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon
            name="lucide:layers-2"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="lucide:files"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          Clone
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Icon name="lucide:trash" class="size-4" aria-hidden="true" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
