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
];

const currentTip = ref(0);

const handleNavigation = () => {
  if (currentTip.value === tips.length - 1) {
    currentTip.value = 0;
  } else {
    currentTip.value++;
  }
};
</script>

<template>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Tooltip-like with steps</Button>
    </PopoverTrigger>
    <PopoverContent class="max-w-[280px] py-3 shadow-none" side="top">
      <div class="space-y-3">
        <div class="space-y-1">
          <p class="text-[13px] font-medium">{{ tips[currentTip].title }}</p>
          <p class="text-muted-foreground text-xs">
            {{ tips[currentTip].description }}
          </p>
        </div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-muted-foreground text-xs">
            {{ currentTip + 1 }}/{{ tips.length }}
          </span>
          <button
            class="text-xs font-medium hover:underline"
            @click="handleNavigation"
          >
            {{ currentTip === tips.length - 1 ? "Start over" : "Next" }}
          </button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
