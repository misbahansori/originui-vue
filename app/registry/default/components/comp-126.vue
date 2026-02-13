<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideCircleUserRound, LucideX } from "lucide-vue-next";

const file = shallowRef<File | null>(null);
const previewUrl = useObjectUrl(file);
const inputRef = useTemplateRef("fileInput");

function handleButtonClick() {
  if (inputRef.value) {
    inputRef.value.click();
  }
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files?.[0]) {
    file.value = input.files[0];
  }
}
</script>

<template>
  <div>
    <div class="relative inline-flex">
      <Button
        variant="outline"
        class="relative size-16 overflow-hidden"
        @click="handleButtonClick"
        :aria-label="previewUrl ? 'Change image' : 'Upload image'"
      >
        <img
          v-if="previewUrl"
          class="h-full w-full object-cover"
          :src="previewUrl"
          alt="Preview of uploaded image"
          width="40"
          height="40"
          style="object-fit: cover"
        />
        <div v-else aria-hidden="true" class="flex items-center justify-center">
          <LucideCircleUserRound class="opacity-60" :size="16" />
        </div>
      </Button>
      <Button
        v-if="previewUrl"
        @click="() => (file = null)"
        size="icon"
        variant="destructive"
        class="border-background absolute -top-2 -right-2 size-6 rounded-full border-2"
        aria-label="Remove image"
      >
        <LucideX :size="16" />
      </Button>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        class="hidden"
        accept="image/*"
        aria-label="Upload image file"
      />
    </div>
    <p v-if="file" class="text-muted-foreground mt-2 text-xs">
      {{ file.name }}
    </p>
    <div class="sr-only" aria-live="polite" role="status">
      {{ previewUrl ? "Image uploaded and preview available" : "No image uploaded" }}
    </div>
  </div>
</template>
