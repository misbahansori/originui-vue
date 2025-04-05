<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideCircleUserRound, LucideX } from "lucide-vue-next";
import { ref } from "vue";

const previewUrl = ref<string | null>(null);
const fileName = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

function handleThumbnailClick() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    if (file) {
      fileName.value = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        previewUrl.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

function handleRemove() {
  previewUrl.value = null;
  fileName.value = null;
  if (fileInput.value) {
    fileInput.value.value = "";
  }
}
</script>

<template>
  <div>
    <div class="relative inline-flex">
      <Button
        variant="outline"
        class="relative size-16 overflow-hidden"
        @click="handleThumbnailClick"
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
        @click="handleRemove"
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
    <p v-if="fileName" class="text-muted-foreground mt-2 text-xs">
      {{ fileName }}
    </p>
    <div class="sr-only" aria-live="polite" role="status">
      {{
        previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"
      }}
    </div>
  </div>
</template>
