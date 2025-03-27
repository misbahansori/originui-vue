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
      <DropdownMenuLabel class="flex items-start gap-3">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          width="32"
          height="32"
          class="shrink-0 rounded-full"
        />
        <div class="flex min-w-0 flex-col">
          <span class="text-foreground truncate text-sm font-medium">
            Keith Kennedy
          </span>
          <span class="text-muted-foreground truncate text-xs font-normal">
            k.kennedy@originui.com
          </span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon
            name="lucide:bolt"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Option 1</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="lucide:layers-2"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Option 2</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="lucide:book-open"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Option 3</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon
            name="lucide:pin"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Option 4</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="lucide:user-pen"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Option 5</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Icon
          name="lucide:log-out"
          class="size-4 opacity-60"
          aria-hidden="true"
        />
        <span>Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
