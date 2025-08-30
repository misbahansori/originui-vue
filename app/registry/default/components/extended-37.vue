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
    code: `pnpm dlx shadcn-vue@latest add ${siteUrl}/r/extended-37.json`,
  },
  {
    label: "npm",
    code: `npx shadcn-vue@latest add ${siteUrl}/r/extended-37.json`,
  },
  {
    label: "yarn",
    code: `npx shadcn-vue@latest add ${siteUrl}/r/extended-37.json`,
  },
  {
    label: "bun",
    code: `bunx --bun shadcn-vue@latest add ${siteUrl}/r/extended-37.json`,
  },
] as const;

const activeTab = ref(commands[0]?.label);

const activeCommand = computed(() =>
  commands.find((command) => command.label === activeTab.value),
);
</script>

<template>
  <div class="relative">
    <Snippet v-model="activeTab" class="rounded-xl">
      <SnippetHeader class="p-0">
        <SnippetTabsList class="bg-transparent">
          <SnippetTabsTrigger
            v-for="command in commands"
            :key="command.label"
            :value="command.label"
            class="data-[state=active]:after:bg-primary data-[state=active]:text-foreground hover:text-muted-foreground relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-px data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            {{ command.label }}
          </SnippetTabsTrigger>
        </SnippetTabsList>
        <SnippetCopyButton v-if="activeCommand" :value="activeCommand.code" />
      </SnippetHeader>
      <SnippetTabsContent
        v-for="command in commands"
        :key="command.label"
        :value="command.label"
        class="bg-muted p-2"
      >
        <div class="bg-background rounded-md shadow-sm">
          <pre class="overflow-x-auto p-4 font-mono">{{ command.code }}</pre>
        </div>
      </SnippetTabsContent>
    </Snippet>
  </div>
</template>
