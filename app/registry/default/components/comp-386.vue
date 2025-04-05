<script setup>
const tips = [
  {
    title: "Welcome to Dashboard",
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
  },
  {
    title: "Quick Actions",
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",
  },
  {
    title: "Need Help?",
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",
  },
  {
    title: "Keyboard Shortcuts",
    description:
      "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.",
  },
  {
    title: "Stay Updated",
    description:
      "Enable notifications to receive updates about your projects, team activity, and important deadlines.",
  },
];

const currentTip = ref(0);

const handleNext = () => {
  if (currentTip.value < tips.length - 1) {
    currentTip.value++;
  }
};

const handlePrev = () => {
  if (currentTip.value > 0) {
    currentTip.value--;
  }
};

const isFirstTip = computed(() => currentTip.value === 0);
const isLastTip = computed(() => currentTip.value === tips.length - 1);
</script>

<template>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Tooltip-like with nav</Button>
    </PopoverTrigger>
    <PopoverContent class="max-w-[280px] py-3 shadow-none" side="top">
      <div class="space-y-3">
        <div class="space-y-1">
          <p class="text-[13px] font-medium">{{ tips[currentTip].title }}</p>
          <p class="text-muted-foreground text-xs">
            {{ tips[currentTip].description }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-muted-foreground text-xs">
            {{ currentTip + 1 }}/{{ tips.length }}
          </span>
          <div class="flex gap-0.5">
            <Button
              size="icon"
              variant="ghost"
              class="size-6"
              @click="handlePrev"
              :disabled="isFirstTip"
              aria-label="Previous tip"
            >
              <Icon
                name="lucide:arrow-left"
                class="size-4"
                aria-hidden="true"
              />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              class="size-6"
              @click="handleNext"
              :disabled="isLastTip"
              aria-label="Next tip"
            >
              <Icon
                name="lucide:arrow-right"
                class="size-4"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
