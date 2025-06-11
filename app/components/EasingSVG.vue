<script setup lang="ts">
interface Easing {
  name: string;
  points: number[];
}

interface EasingSVGProps {
  easing: Easing;
  config: {
    width: number;
    height: number;
    padding: number;
    plotSize: number;
    animationDuration: number;
    pauseDuration: number;
  };
  duration: number;
  animationType: string;
  pauseDuration: number;
}

const props = defineProps<EasingSVGProps>();

const animationKey = ref(0);

// Create animation key effect
onMounted(() => {
  const timer = setInterval(
    () => {
      animationKey.value++;
    },
    (props.duration + props.pauseDuration) * 1000,
  );

  onUnmounted(() => {
    clearInterval(timer);
  });
});

// Computed properties
const bezierPath = computed(() => {
  const { easing, config } = props;
  return `M${config.padding},${config.height - config.padding} C${
    config.padding + (easing.points[0] ?? 0) * config.plotSize
  },${config.height - config.padding - (easing.points[1] ?? 0) * config.plotSize} ${
    config.padding + (easing.points[2] ?? 0) * config.plotSize
  },${config.height - config.padding - (easing.points[3] ?? 0) * config.plotSize} ${
    config.padding + config.plotSize
  },${config.height - config.padding - config.plotSize}`;
});
</script>

<template>
  <svg
    :width="config.width"
    :height="config.height"
    :viewBox="`0 0 ${config.width} ${config.height}`"
    class="w-full"
  >
    <!-- Grid -->
    <rect
      :x="config.padding"
      :y="config.padding"
      :width="config.plotSize"
      :height="config.plotSize"
      class="stroke-muted-foreground/20 fill-none"
      stroke-width="1"
    />

    <!-- Diagonal line -->
    <line
      :x1="config.padding"
      :y1="config.height - config.padding"
      :x2="config.width - config.padding"
      :y2="config.padding"
      class="stroke-muted-foreground/20"
      stroke-width="1"
    />

    <!-- Bezier curve -->
    <path
      :id="`curve-${animationKey}`"
      :d="bezierPath"
      fill="none"
      class="stroke-muted-foreground"
      stroke-width="2"
    />

    <!-- Start point -->
    <circle
      :cx="config.padding"
      :cy="config.height - config.padding"
      r="4"
      class="fill-muted-foreground"
    />

    <!-- End point -->
    <circle
      :cx="config.width - config.padding"
      :cy="config.padding"
      r="4"
      class="fill-muted-foreground"
    />

    <!-- Animated circle using animateMotion -->
    <circle
      r="4"
      class="fill-primary"
      :key="`${animationKey}-${duration}-${pauseDuration}-${animationType}`"
    >
      <animateMotion
        :dur="`${duration}s`"
        :path="bezierPath"
        fill="freeze"
        :begin="`${animationKey * (duration + pauseDuration)}s`"
        restart="always"
      />
    </circle>
  </svg>
</template>
