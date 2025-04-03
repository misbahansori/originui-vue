<script setup lang="ts">
const id = useId();

const options = [
  {
    value: "1",
    label: "Frank Morris",
    initials: "F",
    class: "bg-indigo-400/20 text-indigo-500",
  },
  {
    value: "2",
    label: "Xavier Guerra",
    initials: "X",
    class: "bg-purple-400/20 text-purple-500",
  },
  {
    value: "3",
    label: "Anne Kelley",
    initials: "A",
    class: "bg-rose-400/20 text-rose-500",
  },
];

const selectedOption = ref(options[0]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with placeholder avatar</Label>
    <Select v-model="selectedOption">
      <SelectTrigger
        :id="id"
        class="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_[data-square]]:shrink-0"
      >
        <SelectValue placeholder="Select framework">
          <template v-if="selectedOption">
            <span
              data-square
              class="flex size-5 items-center justify-center rounded bg-indigo-400/20 text-xs font-medium text-indigo-500"
              :class="selectedOption.class"
              aria-hidden="true"
            >
              {{ selectedOption.initials }}
            </span>
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
            <span
              data-square
              class="flex size-5 items-center justify-center rounded text-xs font-medium"
              :class="option.class"
              aria-hidden="true"
            >
              {{ option.initials }}
            </span>
            <span class="truncate">{{ option.label }}</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
