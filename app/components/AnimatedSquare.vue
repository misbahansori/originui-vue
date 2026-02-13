<script setup lang="ts">
interface Easing {
  name: string;
  points: number[];
}

interface AnimatedSquareProps {
  easing: Easing;
  duration: number;
  animationType: "translate" | "scale" | "rotate";
  pauseDuration: number;
}

const props = defineProps<AnimatedSquareProps>();

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
const containerClasses = computed(() => {
  const baseClasses = "pointer-events-none flex w-full items-center";
  const positionClass = props.animationType === "translate" ? "justify-start" : "justify-center";
  return `${baseClasses} ${positionClass}`;
});

const getAnimationStyle = () => {
  if (!props.easing.points.length || props.duration <= 0) return {};

  const baseStyle = {
    "--bezier-coordinates": props.easing.points.join(","),
    "--animation-duration": `${props.duration}s`,
    "--total-duration": `${props.duration + props.pauseDuration}s`,
  };

  const animationName = {
    translate: "translateSquare",
    scale: "scaleSquare",
    rotate: "rotateSquare",
  }[props.animationType];

  return {
    ...baseStyle,
    animationName,
    animationDuration: `${props.duration}s`,
    animationTimingFunction: `cubic-bezier(${props.easing.points.join(",")})`,
    animationIterationCount: "1",
    animationFillMode: "forwards",
    animationDelay: "0s",
  };
};

const containerStyle = computed(() => {
  return props.animationType === "translate" ? getAnimationStyle() : {};
});

const squareStyle = computed(() => {
  return props.animationType !== "translate" ? getAnimationStyle() : {};
});

const animationStyles = computed(
  () => `
  @keyframes translateSquare {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(100% - 2.5rem));
    }
  }
  @keyframes scaleSquare {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes rotateSquare {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,
);
</script>

<template>
  <div
    :key="`${animationKey}-${duration}-${pauseDuration}-${animationType}`"
    :class="containerClasses"
    :style="containerStyle"
  >
    <div
      class="animated-square from-primary to-primary/80 shadow-primary/10 h-10 w-10 rounded-md bg-gradient-to-tr shadow-lg"
      :style="squareStyle"
    />

    <!-- Inline styles for animations -->
    <component :is="'style'">
      {{ animationStyles }}
    </component>
  </div>
</template>
