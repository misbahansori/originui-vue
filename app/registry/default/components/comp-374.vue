<script setup lang="ts">
const framework = ref("nextjs");
const emailNotifications = ref(false);
const pushNotifications = ref(true);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Rich menu with icons
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
            name="lucide:plus"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
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
                <DropdownMenuRadioItem value="nextjs">
                  Next.js
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sveltekit" disabled>
                  SvelteKit
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="remix">
                  Remix
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="astro">
                  Astro
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset>Notifications</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuCheckboxItem
                :checked="emailNotifications"
                @update:checked="emailNotifications = $event"
              >
                Email
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                :checked="pushNotifications"
                @update:checked="pushNotifications = $event"
              >
                Push
              </DropdownMenuCheckboxItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon
            name="lucide:share-2"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Share</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="lucide:archive-restore"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Archive</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Icon name="lucide:trash" class="size-4" aria-hidden="true" />
        <span>Delete</span>
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
