<script setup lang="ts">
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphGroup,
} from "@/registry/default/ui/contribution-graph";

const generateData = () => {
  const days = [];
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 12);

  for (let i = 0; i < 364; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const count = Math.floor(Math.random() * 13);

    days.push({
      date: currentDate.toISOString().split("T")[0],
      count: count,
    });
  }
  return days;
};

const data = ref(generateData());

const weeks = computed(() => {
  const result = [];
  for (let i = 0; i < data.value.length; i += 7) {
    result.push(data.value.slice(i, i + 7));
  }
  return result;
});

const getLevel = (count: number) => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  if (count <= 8) return 4;
  if (count <= 10) return 5;
  return 6;
};

const colors = [
  "bg-muted",
  "bg-amber-100 dark:bg-amber-900/30",
  "bg-amber-200 dark:bg-amber-900/50",
  "bg-amber-300 dark:bg-amber-800/60",
  "bg-amber-400 dark:bg-amber-600/70",
  "bg-amber-500 dark:bg-amber-500/80",
  "bg-amber-600 dark:bg-amber-400",
];
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <ContributionGraph class="flex gap-1">
      <ContributionGraphGroup v-for="(week, weekIndex) in weeks" :key="weekIndex">
        <ContributionGraphBlock
          v-for="(day, dayIndex) in week"
          :key="dayIndex"
          :colors="colors"
          :level="getLevel(day.count)"
          :title="`${day.count} contributions on ${day.date}`"
        />
      </ContributionGraphGroup>
    </ContributionGraph>

    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      With Custom Color
    </p>
  </div>
</template>
