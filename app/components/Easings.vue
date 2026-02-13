<script setup lang="ts">
interface Easing {
  name: string;
  points: number[];
}

interface EasingsProps {
  easings: Easing[];
}

type EasingFilter = "all" | "in" | "out" | "in-out";
type AnimationType = "translate" | "scale" | "rotate";

// Props
const props = defineProps<EasingsProps>();

// Default configuration
const defaultConfig = {
  width: 140,
  height: 140,
  padding: 20,
  plotSize: 100,
  animationDuration: 1000,
  pauseDuration: 1000,
};

// Reactive state
const duration = ref(defaultConfig.animationDuration);
const tempDuration = ref(defaultConfig.animationDuration);
const pauseDuration = defaultConfig.pauseDuration;
const animationType = ref<AnimationType>("translate");
const easingFilter = ref<EasingFilter>("all");
const animationKey = ref(0);

// Watch for changes to restart animation
watch(
  [duration, () => pauseDuration, animationType],
  () => {
    animationKey.value++;
  },
  { deep: true },
);

// Event handlers
const handleSliderChangeEnd = (value: number[] | undefined) => {
  duration.value = value?.[0] ?? 0;
};

const handleSliderChange = (value: number[] | undefined) => {
  tempDuration.value = value?.[0] ?? 0;
};

const handleInputBlur = () => {
  if (tempDuration.value >= 0 && tempDuration.value <= 5000) {
    duration.value = tempDuration.value;
  } else {
    tempDuration.value = duration.value;
  }
};

// Computed
const filteredEasings = computed(() => {
  if (easingFilter.value === "all") return props.easings;

  return props.easings.filter((easing) => {
    const name = easing.name.toLowerCase();
    switch (easingFilter.value) {
      case "in":
        return (name.startsWith("ease-in") && !name.includes("in-out")) || name === "ease-in";
      case "out":
        return name.startsWith("ease-out") || name === "ease-out";
      case "in-out":
        return name.startsWith("ease-in-out") || name === "ease-in-out" || name === "ease";
      default:
        return true;
    }
  });
});
</script>

<template>
  <div class="mb-12 space-y-6">
    <div class="py-4">
      <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div class="flex flex-col gap-2">
          <Label>Duration</Label>
          <div class="flex items-center gap-4">
            <Slider
              :model-value="[tempDuration]"
              :min="0"
              :max="5000"
              :step="1"
              @update:model-value="handleSliderChange"
              @value-commit="handleSliderChangeEnd"
              class="w-[180px]"
            />
            <Input
              type="number"
              v-model="tempDuration"
              @blur="handleInputBlur"
              class="w-[90px]"
              :min="0"
              :max="5000"
            />
            <span class="text-muted-foreground text-sm">ms</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex flex-col gap-2">
            <Label>Filter</Label>
            <Select v-model="easingFilter">
              <SelectTrigger class="h-9 w-[100px]">
                <SelectValue placeholder="Select filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="in">In</SelectItem>
                <SelectItem value="out">Out</SelectItem>
                <SelectItem value="in-out">In-Out</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="flex flex-col gap-2">
            <Label>Animation type</Label>
            <Select v-model="animationType">
              <SelectTrigger class="h-9 w-[180px]">
                <SelectValue placeholder="Select animation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="translate">Translate</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
                <SelectItem value="rotate">Rotate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>

    <div id="grid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="easing in filteredEasings"
        :key="`${easing.name}-${easingFilter}`"
        class="group bg-muted/65 relative flex aspect-square flex-col items-center justify-center gap-4 rounded-xl"
      >
        <div class="pt-6 text-center text-sm font-medium">
          {{ easing.name }}
        </div>

        <div class="flex w-full grow flex-col items-start justify-center px-8">
          <div class="mb-4 flex w-full justify-center">
            <EasingSVG
              :easing="easing"
              :config="defaultConfig"
              :duration="duration / 1000"
              :pause-duration="pauseDuration / 1000"
              :animation-type="animationType"
              :key="`svg-${easing.name}-${easingFilter}-${animationKey}`"
            />
          </div>
          <AnimatedSquare
            :easing="easing"
            :duration="duration / 1000"
            :pause-duration="pauseDuration / 1000"
            :animation-type="animationType"
            :key="`square-${easing.name}-${easingFilter}-${animationKey}`"
          />
        </div>

        <div class="flex items-center justify-center gap-2 pb-5">
          <CopyClass :value="`ease-[cubic-bezier(${easing.points.join(',')})]`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  :deep(.group),
  :deep(.animated-circle),
  :deep(.animated-square) {
    transition: opacity 0.25s ease;
  }
  #grid:hover :deep(.group) {
    opacity: 0.5;
  }
  #grid:hover :deep(.group .animated-circle),
  #grid:hover :deep(.group .animated-square) {
    opacity: 0;
  }
  #grid :deep(.group:hover),
  #grid :deep(.group:hover .animated-circle),
  #grid :deep(.group:hover .animated-square) {
    opacity: 1;
  }
}
</style>
