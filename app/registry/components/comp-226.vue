<script setup lang="ts">
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with avatar</Label>
    <Select default-value="1">
      <SelectTrigger
        :id="id"
        class="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2"
      >
        <SelectGroup>
          <SelectLabel class="ps-2">Impersonate user</SelectLabel>
          <SelectItem value="1">
            <img
              class="size-5 rounded"
              src="/avatar-20-01.jpg"
              alt="Frank Allison"
              width="20"
              height="20"
            />
            <span class="truncate">Jenny Hamilton</span>
          </SelectItem>
          <SelectItem value="2">
            <img
              class="size-5 rounded"
              src="/avatar-20-02.jpg"
              alt="Xavier Guerra"
              width="20"
              height="20"
            />
            <span class="truncate">Paul Smith</span>
          </SelectItem>
          <SelectItem value="3">
            <img
              class="size-5 rounded"
              src="/avatar-20-03.jpg"
              alt="Anne Kelley"
              width="20"
              height="20"
            />
            <span class="truncate">Luna Wyen</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
