<script setup lang="ts">
const sliders = [
  {
    label: "X",
    minValue: -10,
    maxValue: 10,
    initialValue: [-2],
    defaultValue: [0],
  },
  {
    label: "Y",
    minValue: -10,
    maxValue: 10,
    initialValue: [4],
    defaultValue: [0],
  },

  {
    label: "Z",
    minValue: -10,
    maxValue: 10,
    initialValue: [2],
    defaultValue: [0],
  },
];

const slidersRefs = useTemplateRef("slidersRefs");

const resetAll = () => {
  slidersRefs.value?.forEach((slider) => {
    slider?.resetToDefault();
  });
};
</script>

<template>
  <div class="space-y-4">
    <legend class="text-foreground text-sm font-medium">Object position</legend>
    <div class="space-y-2">
      <SliderWithInput
        v-for="slider in sliders"
        :key="slider.label"
        ref="slidersRefs"
        :label="slider.label"
        :min-value="slider.minValue"
        :max-value="slider.maxValue"
        :initial-value="slider.initialValue"
        :default-value="slider.defaultValue"
      />
    </div>
    <Button class="w-full" variant="outline" @click="resetAll">
      <Icon
        name="lucide:rotate-ccw"
        class="-ms-1 opacity-60"
        size="16"
        aria-hidden="true"
      />
      Reset
    </Button>
  </div>
</template>
