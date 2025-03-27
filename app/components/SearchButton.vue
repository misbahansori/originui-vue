<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

useEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    router.push("/search");
  }
});
</script>

<template>
  <NuxtLink
    to="/search"
    class="bg-background text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:ring-ring/50 inline-flex h-10 w-fit min-w-72 cursor-text rounded-full border px-4 py-2 text-sm outline-none focus:ring-[3px]"
  >
    <span class="flex grow items-center gap-2">
      <Icon
        name="ri:search-2-line"
        class="text-muted-foreground -ms-1"
        size="20"
        aria-hidden="true"
      />
      <span class="font-normal text-zinc-400 dark:text-zinc-500">
        Quick search...
      </span>
      <div
        class="text-muted-foreground/80 pointer-events-none ml-auto flex items-center justify-center"
      >
        <kbd
          class="text-muted-foreground inline-flex font-[inherit] text-xs font-medium"
        >
          <span class="opacity-70">⌘</span>
          K
        </kbd>
      </div>
    </span>
  </NuxtLink>
</template>
