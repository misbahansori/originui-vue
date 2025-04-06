<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { ref, useId } from "vue";

const id = useId();

const options = [
  { value: "1", label: "Frank Allison", avatar: "/avatar-20-01.jpg" },
  { value: "2", label: "Jenny Hamilton", avatar: "/avatar-20-02.jpg" },
  { value: "3", label: "Paul Smith", avatar: "/avatar-20-03.jpg" },
];

const selectedOption = ref(options[0]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with avatar</Label>
    <Select v-model="selectedOption">
      <SelectTrigger
        :id="id"
        class="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Select framework">
          <template v-if="selectedOption">
            <img
              :src="selectedOption.avatar"
              :alt="selectedOption.label"
              class="size-5 rounded"
            />
            <span class="truncate">{{ selectedOption.label }}</span>
          </template>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2"
      >
        <SelectGroup>
          <SelectLabel class="ps-2">Impersonate user</SelectLabel>
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option"
          >
            <img
              class="size-5 rounded"
              :src="option.avatar"
              :alt="option.label"
              width="20"
              height="20"
            />
            <span class="truncate">{{ option.label }}</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
