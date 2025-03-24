<script setup lang="ts">
// TODO: This component uses a third-party library (emblor)
// We need to find an equivalent Vue library or implement custom functionality
import { ref } from "vue";

interface Tag {
  id: string;
  text: string;
}

const tags = ref<Tag[]>([
  {
    id: "1",
    text: "Red",
  },
]);

const newTagText = ref("");
const activeTagIndex = ref<number | null>(null);

function addTag() {
  if (newTagText.value.trim()) {
    tags.value.push({
      id: Date.now().toString(),
      text: newTagText.value.trim(),
    });
    newTagText.value = "";
  }
}

function removeTag(index: number) {
  tags.value.splice(index, 1);
  activeTagIndex.value = null;
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" && newTagText.value) {
    e.preventDefault();
    addTag();
  } else if (
    e.key === "Backspace" &&
    !newTagText.value &&
    tags.value.length > 0
  ) {
    removeTag(tags.value.length - 1);
  }
}

function setActiveTag(index: number) {
  activeTagIndex.value = index;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="inner-tag-input">Input with inner tags</Label>
    <div
      class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 flex flex-wrap items-center gap-1 rounded-md border p-1 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <!-- Inline tags -->
      <div
        v-for="(tag, index) in tags"
        :key="tag.id"
        class="bg-background border-input hover:bg-background relative flex h-6 items-center rounded-md border ps-2 pe-7 text-xs font-medium"
        :class="{ 'ring-ring/50 ring-2': activeTagIndex === index }"
        @click="setActiveTag(index)"
      >
        <span>{{ tag.text }}</span>
        <button
          type="button"
          @click.stop="removeTag(index)"
          class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-6 rounded-e-md p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
          aria-label="Remove tag"
        >
          <Icon name="lucide:x" :size="12" class="m-auto" aria-hidden="true" />
        </button>
      </div>

      <!-- Input field inline with tags -->
      <input
        id="inner-tag-input"
        v-model="newTagText"
        @keydown="handleKeydown"
        placeholder="Add a tag"
        class="h-6 w-full min-w-[80px] border-0 bg-transparent px-2 text-sm shadow-none outline-none focus:ring-0"
        type="text"
      />
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used emblor -->
      Built with custom Vue tag input implementation
    </p>
  </div>
</template>
