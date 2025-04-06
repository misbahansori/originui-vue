<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { ref, useId } from "vue";

const id = useId();

const options = [
  {
    value: "1",
    label: "Jenny Hamilton",
    avatar: "/avatar-40-01.jpg",
    username: "@jennycodes",
  },
  {
    value: "2",
    label: "Paul Smith",
    avatar: "/avatar-40-02.jpg",
    username: "@paulsmith",
  },
  {
    value: "3",
    label: "Luna Wyen",
    avatar: "/avatar-40-03.jpg",
    username: "@wyen.luna",
  },
];

const selectedOption = ref(options[0]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with portrait</Label>
    <Select v-model="selectedOption">
      <SelectTrigger
        :id="id"
        class="h-auto ps-2 text-left [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Select user">
          <span v-if="selectedOption" class="flex items-center gap-2">
            <img
              class="rounded-full"
              :src="selectedOption.avatar"
              :alt="selectedOption.label"
              width="40"
              height="40"
            />
            <span>
              <span class="block font-medium">{{ selectedOption.label }}</span>
              <span class="text-muted-foreground mt-0.5 block text-xs">
                {{ selectedOption.username }}
              </span>
            </span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
      >
        <SelectItem
          v-for="option in options"
          :key="option.value"
          :value="option"
        >
          <span class="flex items-center gap-2">
            <img
              class="rounded-full"
              :src="option.avatar"
              :alt="option.label"
              width="40"
              height="40"
            />
            <span>
              <span class="block font-medium">{{ option.label }}</span>
              <span class="text-muted-foreground mt-0.5 block text-xs">
                {{ option.username }}
              </span>
            </span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
