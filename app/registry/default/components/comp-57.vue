<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { LucideX } from "lucide-vue-next";
import {
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  TagsInputRoot,
} from "reka-ui";
import { ref, useId } from "vue";

const id = useId();
const tags = ref<string[]>(["red", "green"]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with inner tags</Label>
    <TagsInputRoot
      v-model="tags"
      class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 flex flex-wrap items-center gap-1 rounded-md border p-1 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <TagsInputItem
        v-for="tag in tags"
        :key="tag"
        :value="tag"
        class="bg-background border-input hover:bg-background relative flex h-7 items-center rounded-md border ps-2 pe-7 text-xs font-medium"
      >
        <TagsInputItemText>{{ tag }}</TagsInputItemText>
        <TagsInputItemDelete
          class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-7 rounded-e-md p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
          aria-label="Remove tag"
        >
          <LucideX :size="12" class="m-auto" aria-hidden="true" />
        </TagsInputItemDelete>
      </TagsInputItem>

      <TagsInputInput
        :id="id"
        placeholder="Add a tag"
        class="h-6 w-full min-w-[80px] border-0 bg-transparent px-2 text-sm shadow-none outline-none focus:ring-0"
        type="text"
      />
    </TagsInputRoot>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/tags-input"
        target="_blank"
        rel="noopener nofollow"
      >
        TagsInput
      </a>
    </p>
  </div>
</template>
