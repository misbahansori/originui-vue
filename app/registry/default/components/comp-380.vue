<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" aria-label="Select theme">
          <Icon
            v-if="colorMode.value === 'light'"
            name="lucide:sun"
            class="size-4"
            aria-hidden="true"
          />
          <Icon
            v-if="colorMode.value === 'dark'"
            name="lucide:moon"
            class="size-4"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-32">
        <DropdownMenuItem @click="colorMode.preference = 'light'">
          <Icon
            name="lucide:sun"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'dark'">
          <Icon
            name="lucide:moon"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'system'">
          <Icon
            name="lucide:monitor"
            class="size-4 opacity-60"
            aria-hidden="true"
          />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
