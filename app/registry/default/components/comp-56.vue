<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
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
const tags = ref<string[]>(["sport", "coding", "travel"]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with tags</Label>
    <TagsInputRoot v-model="tags" class="flex flex-col gap-2">
      <TagsInputInput :id="id" placeholder="Add a tag" asChild type="text">
        <Input />
      </TagsInputInput>

      <div class="flex flex-wrap gap-1">
        <TagsInputItem
          v-for="tag in tags"
          :key="tag"
          :value="tag"
          class="bg-background border-input hover:bg-background relative flex h-6 items-center rounded-md border ps-2 pe-7 text-xs font-medium"
        >
          <TagsInputItemText>{{ tag }}</TagsInputItemText>
          <TagsInputItemDelete
            type="button"
            class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-6 rounded-s-none rounded-e-md p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
            aria-label="Remove tag"
          >
            <LucideX :size="12" class="m-auto" aria-hidden="true" />
          </TagsInputItemDelete>
        </TagsInputItem>
      </div>
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
