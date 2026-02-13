<script setup lang="ts">
import {
  LucideBolt,
  LucideBookOpen,
  LucideLayers2,
  LucideLogOut,
  LucidePin,
  LucideUserPen,
} from "lucide-vue-next";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="h-auto p-0 hover:bg-transparent">
        <Avatar size="xs">
          <AvatarImage src="./avatar.jpg" alt="Profile image" />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="max-w-64" align="end">
      <DropdownMenuLabel class="flex min-w-0 flex-col">
        <span class="text-foreground truncate text-sm font-medium">Keith Kennedy</span>
        <span class="text-muted-foreground truncate text-xs font-normal">
          k.kennedy@originui.com
        </span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <LucideBolt :size="16" class="opacity-60" aria-hidden="true" />
          <span>Option 1</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideLayers2 :size="16" class="opacity-60" aria-hidden="true" />
          <span>Option 2</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideBookOpen :size="16" class="opacity-60" aria-hidden="true" />
          <span>Option 3</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <LucidePin :size="16" class="opacity-60" aria-hidden="true" />
          <span>Option 4</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideUserPen :size="16" class="opacity-60" aria-hidden="true" />
          <span>Option 5</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LucideLogOut :size="16" class="opacity-60" aria-hidden="true" />
        <span>Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
