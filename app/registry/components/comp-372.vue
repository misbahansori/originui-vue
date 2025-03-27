<script setup lang="ts">
const framework = ref("nextjs");
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Radio items
        <Icon
          name="lucide:chevron-down"
          class="-me-1 size-4 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="framework">
        <DropdownMenuRadioItem value="nextjs">Next.js</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="sveltekit" disabled>
          SvelteKit
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="remix">Remix</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="astro">Astro</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
