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

const commands = [
  {
    label: "npm",
    code: "npx next-forge@latest init",
  },
  {
    label: "yarn",
    code: "yarn dlx next-forge@latest init",
  },
  {
    label: "pnpm",
    code: "pnpx next-forge@latest init",
  },
  {
    label: "bun",
    code: "bunx next-forge@latest init",
  },
] as const;

const activeTab = ref(commands[0]?.label);

const activeCommand = computed(() => commands.find((command) => command.label === activeTab.value));
</script>

<template>
  <div class="*:not-first:mt-2">
    <Snippet v-model="activeTab">
      <SnippetHeader>
        <SnippetTabsList>
          <SnippetTabsTrigger
            v-for="command in commands"
            :key="command.label"
            :value="command.label"
          >
            {{ command.label }}
          </SnippetTabsTrigger>
        </SnippetTabsList>
        <SnippetCopyButton :value="activeCommand?.code || ''" />
      </SnippetHeader>
      <SnippetTabsContent v-for="command in commands" :key="command.label" :value="command.label">
        <pre class="truncate p-4">{{ command.code }}</pre>
      </SnippetTabsContent>
    </Snippet>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Based on Kibo Snippet component
      <a
        class="hover:text-foreground underline"
        href="https://www.kibo-ui.com/components/snippet"
        target="_blank"
        rel="noopener nofollow"
      >
        Kibo UI
      </a>
    </p>
  </div>
</template>
