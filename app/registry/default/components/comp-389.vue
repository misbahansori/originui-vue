<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { computed, ref } from "vue";

interface TourStep {
  icon: string;
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    icon: "lucide:heart",
    title: "Heart",
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
  },
  {
    icon: "lucide:diamond",
    title: "Diamond",
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",
  },
  {
    icon: "lucide:club",
    title: "Club",
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",
  },
  {
    icon: "lucide:spade",
    title: "Spade",
    description:
      "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.",
  },
];

const currentTip = ref(0);

const handleNavigation = () => {
  if (currentTip.value === tourSteps.length - 1) {
    currentTip.value = 0;
  } else {
    currentTip.value++;
  }
};

const handleOpenChange = (open: boolean) => {
  if (open) {
    currentTip.value = 0;
  }
};

const currentStep = computed(() => {
  const step = tourSteps[currentTip.value];
  if (!step) throw new Error("Tour step not found");
  return step;
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <Popover @open-change="handleOpenChange">
      <div class="grid grid-cols-2 place-items-center gap-4">
        <template v-for="(step, index) in tourSteps" :key="step.title">
          <div
            class="bg-secondary text-muted-foreground flex size-10 items-center justify-center rounded-md text-sm font-medium"
            :class="{ 'popover-anchor': currentTip === index }"
          >
            {{ index + 1 }}
          </div>
        </template>
      </div>

      <PopoverTrigger asChild>
        <Button variant="outline">Start tour</Button>
      </PopoverTrigger>

      <PopoverContent
        class="max-w-[280px] py-3 shadow-none"
        :side="currentTip % 2 === 0 ? 'left' : 'right'"
        show-arrow
      >
        <div class="space-y-3">
          <div class="space-y-1">
            <p class="text-[13px] font-medium">
              {{ currentStep.title }}
            </p>
            <p class="text-muted-foreground text-xs">
              {{ currentStep.description }}
            </p>
          </div>
          <div class="flex items-center justify-between gap-2">
            <span class="text-muted-foreground text-xs">
              {{ currentTip + 1 }}/{{ tourSteps.length }}
            </span>
            <button class="text-xs font-medium hover:underline" @click="handleNavigation">
              {{ currentTip === tourSteps.length - 1 ? "Start over" : "Next" }}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
