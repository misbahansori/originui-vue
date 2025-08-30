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
];

const value = ref(commands[0]?.label || "npm");

const activeCommand = computed(() =>
  commands.find((command) => command.label === value.value),
);

const handleCopy = () => {
  const command = activeCommand.value;
  if (command) {
    console.log(`Copied "${command.code}" to clipboard`);
  }
};

const handleError = () => {
  const command = activeCommand.value;
  if (command) {
    console.error(`Failed to copy "${command.code}" to clipboard`);
  }
};
</script>

<template>
  <Snippet v-model="value">
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
      <SnippetCopyButton
        v-if="activeCommand"
        :value="activeCommand.code"
        @copy="handleCopy"
        @error="handleError"
      />
    </SnippetHeader>
    <SnippetTabsContent
      v-for="command in commands"
      :key="command.label"
      :value="command.label"
    >
      {{ command.code }}
    </SnippetTabsContent>
  </Snippet>
</template>
