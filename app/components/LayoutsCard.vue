<script setup lang="ts">
defineProps<{
  card: {
    id: number;
    title: string;
    demoUrl?: string;
    repoUrl?: string;
    imgHeight: number;
  };
}>();
</script>

<template>
  <article>
    <figure class="bg-border/50 relative -m-px rounded-xl border p-4">
      <img
        class="rounded-md"
        :src="`/layouts/app-${card.id}.png`"
        :alt="card.title"
        :width="1120"
        :height="card.imgHeight"
      />
    </figure>
    <div class="mt-4 flex items-center justify-between">
      <h2 class="text-sm font-medium">{{ card.title }}</h2>
      <template v-if="card.demoUrl && card.repoUrl">
        <div class="flex items-center gap-6">
          <a
            :href="card.demoUrl"
            class="inline-flex items-center gap-1 text-sm hover:underline"
            target="_blank"
          >
            Live Demo
            <span class="text-muted-foreground">
              <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
            </span>
          </a>
          <a
            :href="card.repoUrl"
            class="inline-flex items-center gap-1 text-sm hover:underline"
            target="_blank"
          >
            GitHub
            <span class="text-muted-foreground">
              <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
            </span>
          </a>
        </div>
      </template>
      <span v-else class="text-sm text-zinc-500">Code soon</span>
    </div>
  </article>
</template>
