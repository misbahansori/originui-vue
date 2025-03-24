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
    text: "Sport",
  },
  {
    id: "2",
    text: "Coding",
  },
  {
    id: "3",
    text: "Travel",
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
    <Label for="tag-input">Input with tags</Label>
    <div
      class="border-input bg-background text-foreground rounded-md border p-0.5"
    >
      <!-- Input field at the top -->
      <div class="flex items-center p-1.5">
        <input
          id="tag-input"
          v-model="newTagText"
          @keydown="handleKeydown"
          placeholder="Add a tag"
          class="grow border-0 bg-transparent p-0 text-sm outline-none focus:ring-0"
          type="text"
        />
      </div>

      <!-- Tag list -->
      <div class="flex flex-wrap gap-1 p-1">
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
            class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-6 rounded-s-none rounded-e-md p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
            aria-label="Remove tag"
          >
            <Icon
              name="lucide:x"
              :size="12"
              class="m-auto"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
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
