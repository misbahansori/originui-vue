<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideLoaderCircle, LucideMic, LucideSearch } from "lucide-vue-next";
import { ref, useId, watchEffect } from "vue";

const id = useId();
const inputValue = ref("");
const isLoading = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

watchEffect(() => {
  if (inputValue.value) {
    isLoading.value = true;
    timer = setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }

  return () => timer && clearTimeout(timer);
});
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Search input with loader</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="Search..." type="search" v-model="inputValue" />
      <InputGroupAddon>
        <LucideLoaderCircle
          v-if="isLoading"
          class="animate-spin"
          :size="16"
          role="status"
          aria-label="Loading..."
        />
        <LucideSearch v-else :size="16" aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Press to speak" type="submit">
          <LucideMic :size="16" aria-hidden="true" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
