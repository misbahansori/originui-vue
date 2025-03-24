<script setup lang="ts">
import { ref } from "vue";

const previewUrl = ref<string | null>(null);
const fileName = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

function handleButtonClick() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    fileName.value = file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewUrl.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
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
    <div class="inline-flex items-center gap-2 align-top">
      <div
        class="border-input relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border"
        :aria-label="
          previewUrl ? 'Preview of uploaded image' : 'Default user avatar'
        "
      >
        <img
          v-if="previewUrl"
          class="h-full w-full object-cover"
          :src="previewUrl"
          alt="Preview of uploaded image"
          width="32"
          height="32"
        />
        <div v-else aria-hidden="true" class="flex items-center justify-center">
          <Icon name="lucide:circle-user-round" class="opacity-60" size="16" />
        </div>
      </div>
      <div class="relative inline-block">
        <Button @click="handleButtonClick" aria-haspopup="dialog">
          {{ fileName ? "Change image" : "Upload image" }}
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
    </div>
    <div v-if="fileName" class="mt-2">
      <div class="inline-flex gap-2 text-xs">
        <p class="text-muted-foreground truncate" aria-live="polite">
          {{ fileName }}
        </p>
        <button
          @click="handleRemove"
          class="font-medium text-red-500 hover:underline"
          :aria-label="`Remove ${fileName}`"
        >
          Remove
        </button>
      </div>
    </div>
    <div class="sr-only" aria-live="polite" role="status">
      {{
        previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"
      }}
    </div>
  </div>
</template>
