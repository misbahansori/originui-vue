<script setup lang="ts">
import { computed, ref, useId } from "vue";
import { cn } from "~/utils/utils";

const id = useId();
const open = ref(false);
const value = ref("");

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

const selectedFramework = computed(() => {
  return frameworks.find((framework) => framework.value === value.value)?.label;
});

function handleSelect(currentValue: string) {
  value.value = currentValue === value.value ? "" : currentValue;
  open.value = false;
}
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with search</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          :id="id"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
        >
          <span :class="cn('truncate', !value && 'text-muted-foreground')">
            {{ selectedFramework || "Select framework" }}
          </span>
          <Icon
            name="lucide:chevron-down"
            size="16"
            class="text-muted-foreground/80 shrink-0"
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        class="border-input w-full min-w-[var(--reka-popper-anchor-width)] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="framework in frameworks"
                :key="framework.value"
                :value="framework.value"
                @select="handleSelect(framework.value)"
              >
                {{ framework.label }}
                <Icon
                  v-if="value === framework.value"
                  name="lucide:check"
                  size="16"
                  class="ml-auto"
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
