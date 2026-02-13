<script setup lang="ts">
import { LucideBotMessageSquare, LucideMessageCircleDashed } from "lucide-vue-next";

import UserMenu from "@/registry/default/components/navbar-components/UserMenu.vue";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const models = [
  {
    value: "orion-alpha-45",
    label: "Orion-Alpha 4.5",
    description: "Balanced performance and creativity",
  },
  {
    value: "orion-code-4",
    label: "Orion-Code 4",
    description: "Optimized for code generation and understanding",
  },
  {
    value: "nova-chat-4",
    label: "Nova-Chat 4",
    description: "Excels at natural, engaging conversations",
  },
  {
    value: "galaxy-max-4",
    label: "Galaxy-Max 4",
    description: "Most powerful model for complex tasks",
  },
];

const selectValue = ref("orion-alpha-45");

const selectedModel = computed(() => {
  return models.find((model) => model.value === selectValue.value);
});
</script>

<template>
  <header class="border-b px-4 md:px-6">
    <div class="flex h-16 items-center justify-between gap-4">
      <!-- Left side -->
      <div>
        <Select v-model="selectValue">
          <SelectTrigger
            class="[&>svg]:text-muted-foreground/80 **:data-desc:hidden [&>svg]:shrink-0"
          >
            <LucideBotMessageSquare :size="16" aria-hidden="true" />
            <SelectValue aria-label="Select AI model">
              {{ selectedModel ? selectedModel.label : "Choose an AI model" }}
            </SelectValue>
          </SelectTrigger>
          <SelectContent
            class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
          >
            <SelectGroup>
              <SelectLabel class="text-muted-foreground ps-2 text-xs font-medium">
                Models
              </SelectLabel>
              <SelectItem v-for="model in models" :key="model.value" :value="model.value">
                <div class="flex flex-col">
                  <span>{{ model.label }}</span>
                  <span class="text-muted-foreground mt-1 block text-xs" data-desc>
                    {{ model.description }}
                  </span>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <!-- Right side: Actions -->
      <div class="flex items-center justify-end gap-2">
        <!-- Layout button -->
        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground size-8 rounded-full shadow-none"
          aria-label="Temporary chat"
        >
          <LucideMessageCircleDashed :size="16" aria-hidden="true" />
        </Button>
        <!-- User menu -->
        <UserMenu />
      </div>
    </div>
  </header>
</template>
