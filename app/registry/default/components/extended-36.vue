<script setup lang="ts">
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/registry/default/ui/snippet";
import { computed, ref } from "vue";

const siteUrl = "https://www.originui-vue.com";

const commands = [
  {
    label: "pnpm",
    code: `pnpm dlx shadcn-vue@latest add ${siteUrl}/r/extended-36.json`,
  },
  {
    label: "npm",
    code: `npx shadcn-vue@latest add ${siteUrl}/r/extended-36.json`,
  },
  {
    label: "yarn",
    code: `npx shadcn-vue@latest add ${siteUrl}/r/extended-36.json`,
  },
  {
    label: "bun",
    code: `bunx --bun shadcn-vue@latest add ${siteUrl}/r/extended-36.json`,
  },
] as const;

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const packageManager = ref<PackageManager>("pnpm");

const activeCommand = computed(() =>
  commands.find((command) => command.label === packageManager.value),
);
</script>

<template>
  <div class="dark relative">
    <Snippet
      v-model="packageManager"
      class="rounded-md border-0 bg-zinc-950 dark:bg-zinc-900"
    >
      <SnippetHeader class="border-0 bg-transparent p-0">
        <SnippetTabsList
          class="dark h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0"
        >
          <SnippetTabsTrigger
            v-for="command in commands"
            :key="command.label"
            :value="command.label"
            class="data-[state=active]:after:bg-primary data-[state=active]:text-foreground hover:text-muted-foreground relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            {{ command.label }}
          </SnippetTabsTrigger>
        </SnippetTabsList>
        <SnippetCopyButton
          v-if="activeCommand"
          :value="activeCommand.code"
          class="absolute top-1 right-1 opacity-100"
        />
      </SnippetHeader>
      <SnippetTabsContent
        v-for="command in commands"
        :key="command.label"
        :value="command.label"
        class="m-0 bg-transparent p-4"
      >
        <span class="font-mono text-[12.8px] text-zinc-100">
          {{ command.code }}
        </span>
      </SnippetTabsContent>
    </Snippet>
  </div>
</template>
