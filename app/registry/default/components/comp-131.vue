<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/registry/default/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideChevronDown } from "lucide-vue-next";
import { computed, ref } from "vue";

const options = [
  {
    label: "Merge pull request",
    description:
      "All commits from this branch will be added to the base branch via a commit version.",
  },
  {
    label: "Squash and merge",
    description:
      "The 6 commits from this branch will be combined into one commit in the base branch.",
  },
  {
    label: "Rebase and merge",
    description: "The 6 commits from this branch will be rebased and added to the base branch.",
  },
];

const selectedIndex = ref("0");

const selectedOption = computed(() => {
  const index = Number(selectedIndex.value);
  return options[index] || options[0];
});
</script>

<template>
  <div class="flex items-center justify-center">
    <ButtonGroup>
      <Button>
        {{ selectedOption?.label }}
      </Button>
      <ButtonGroupSeparator class="bg-primary/70" />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button size="icon" aria-label="Options">
            <LucideChevronDown aria-hidden="true" class="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="max-w-64 md:max-w-xs"
          side="bottom"
          :side-offset="4"
          align="end"
        >
          <DropdownMenuRadioGroup v-model="selectedIndex">
            <DropdownMenuRadioItem
              v-for="(option, index) in options"
              :key="option.label"
              :value="String(index)"
              class="items-start [&>span]:pt-1.5"
            >
              <div class="flex flex-col gap-1">
                <span class="text-sm font-medium">{{ option.label }}</span>
                <span class="text-muted-foreground text-xs">
                  {{ option.description }}
                </span>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  </div>
</template>
