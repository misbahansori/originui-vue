<script setup lang="ts">
import { h, useId } from "vue";
import { cn } from "~/utils/utils";

const id = useId();

const Square = (props: { class?: string; children?: any }) => {
  return h(
    "span",
    {
      "data-square": true,
      class: cn(
        "bg-muted text-muted-foreground flex size-5 items-center justify-center rounded text-xs font-medium",
        props.class,
      ),
      "aria-hidden": "true",
    },
    props.children,
  );
};
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with placeholder avatar</Label>
    <Select default-value="1">
      <SelectTrigger
        :id="id"
        class="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_[data-square]]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2"
      >
        <SelectGroup>
          <SelectLabel class="ps-2">Impersonate user</SelectLabel>
          <SelectItem value="1">
            <span
              data-square
              class="flex size-5 items-center justify-center rounded bg-indigo-400/20 text-xs font-medium text-indigo-500"
              aria-hidden="true"
            >
              F
            </span>
            <span class="truncate">Frank Morris</span>
          </SelectItem>
          <SelectItem value="2">
            <span
              data-square
              class="flex size-5 items-center justify-center rounded bg-purple-400/20 text-xs font-medium text-purple-500"
              aria-hidden="true"
            >
              X
            </span>
            <span class="truncate">Xavier Guerra</span>
          </SelectItem>
          <SelectItem value="3">
            <span
              data-square
              class="flex size-5 items-center justify-center rounded bg-rose-400/20 text-xs font-medium text-rose-500"
              aria-hidden="true"
            >
              A
            </span>
            <span class="truncate">Anne Kelley</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
