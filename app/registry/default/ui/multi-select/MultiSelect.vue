<script setup lang="ts">
import {
  ComboboxAnchor,
  ComboboxGroup,
  ComboboxItem,
  ComboboxItemIndicator,
} from "@/registry/default/ui/combobox";
import { LucideCheck, LucideX } from "lucide-vue-next";
import {
  ComboboxInput,
  ComboboxRoot,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  TagsInputRoot,
  useFilter,
} from "reka-ui";
import { computed } from "vue";

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  fixed?: boolean;
  [key: string]: string | boolean | undefined;
}

interface MultySelectProps {
  defaultOptions?: Option[];
  /** manually controlled options */
  options: Option[];
  placeholder?: string;
}

const query = defineModel<string>("query", {
  default: "",
});

const modelValue = defineModel<Option[]>("modelValue", {
  default: () => [],
});

const { defaultOptions, options, placeholder } =
  defineProps<MultySelectProps>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: Option[]): void;
  (e: "update:query", payload: string): void;
}>();

const { contains } = useFilter({ sensitivity: "base" });

const filteredOptions = computed(() =>
  options.filter(
    (option) =>
      contains(option.value, query.value) &&
      !modelValue.value.some((item) => item.value === option.value),
  ),
);

watch(
  modelValue,
  () => {
    query.value = "";
  },
  { deep: true },
);
</script>

<template>
  <ComboboxRoot v-model="modelValue" multiple ignore-filter>
    <ComboboxAnchor class="w-full">
      <TagsInputRoot
        v-model="modelValue"
        delimiter=""
        class="border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative min-h-[38px] cursor-text rounded-md border p-1 text-sm transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50"
      >
        <div class="flex flex-wrap gap-1">
          <TagsInputItem
            v-for="item in modelValue"
            :key="item.value"
            :value="item.value"
            :disabled="item.disabled"
            class="animate-fadeIn bg-background text-secondary-foreground hover:bg-background relative inline-flex h-7 cursor-default items-center rounded-md border ps-2 pe-7 pl-2 text-xs font-medium transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-fixed:pe-2"
          >
            <TagsInputItemText />
            <TagsInputItemDelete
              class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-e-md border border-transparent p-0 outline-hidden transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
            >
              <LucideX class="size-4" aria-hidden="true" />
            </TagsInputItemDelete>
          </TagsInputItem>

          <ComboboxInput v-model="query" as-child>
            <TagsInputInput
              placeholder="Select frameworks"
              class="placeholder:text-muted-foreground/70 flex-1 bg-transparent px-2 py-1 outline-hidden disabled:cursor-not-allowed"
              :class="{
                '-ml-1': modelValue.length !== 0,
              }"
              @keydown.enter.prevent
            />
          </ComboboxInput>
        </div>
      </TagsInputRoot>
    </ComboboxAnchor>

    <ComboboxList class="w-(--reka-combobox-trigger-width)">
      <ComboboxEmpty class="px-2 py-4">No results found.</ComboboxEmpty>

      <ComboboxGroup v-if="filteredOptions.length">
        <ComboboxItem
          v-for="option in filteredOptions"
          :key="option.value"
          :value="option"
        >
          {{ option.label }}

          <ComboboxItemIndicator>
            <LucideCheck class="ml-auto size-4" />
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxRoot>
</template>
