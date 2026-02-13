<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  LucideArchiveRestore,
  LucideChevronDown,
  LucidePlus,
  LucideShare2,
  LucideTrash,
} from "lucide-vue-next";
import { ref } from "vue";

const framework = ref("nextjs");
const emailNotifications = ref(false);
const pushNotifications = ref(true);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Rich menu with icons
        <LucideChevronDown class="-me-1 size-4 opacity-60" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <LucidePlus class="size-4 opacity-60" aria-hidden="true" />
          <span>New</span>
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset>Framework</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup v-model="framework">
                <DropdownMenuRadioItem value="nextjs">Next.js</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sveltekit" disabled>SvelteKit</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="remix">Remix</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="astro">Astro</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset>Notifications</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuCheckboxItem v-model="emailNotifications">
                Email
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem v-model="pushNotifications">Push</DropdownMenuCheckboxItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <LucideShare2 class="size-4 opacity-60" aria-hidden="true" />
          <span>Share</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideArchiveRestore class="size-4 opacity-60" aria-hidden="true" />
          <span>Archive</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <LucideTrash class="size-4" aria-hidden="true" />
        <span>Delete</span>
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
