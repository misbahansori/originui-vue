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
  "bg-fuchsia-100 dark:bg-fuchsia-900/30",
  "bg-fuchsia-200 dark:bg-fuchsia-900/50",
  "bg-fuchsia-300 dark:bg-fuchsia-800/60",
  "bg-fuchsia-400 dark:bg-fuchsia-600/70",
  "bg-fuchsia-500 dark:bg-fuchsia-500/80",
  "bg-fuchsia-600 dark:bg-fuchsia-400",
];

const monthLabels = computed(() => {
  let lastMonth = -1;

  return weeks.value.map((week) => {
    const firstDay = week[0];
    if (firstDay?.date) {
      const firstDayOfWeek = new Date(firstDay.date);
      const month = firstDayOfWeek.getMonth();

      if (month !== lastMonth) {
        lastMonth = month;
        return firstDayOfWeek.toLocaleString("en-US", { month: "short" });
      }
    }
    return "";
  });
});

const totalActivities = computed(() => {
  return data.value.reduce((sum, day) => sum + day.count, 0);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <div class="mb-1 flex gap-1">
        <div
          v-for="(label, index) in monthLabels"
          :key="index"
          class="text-muted-foreground w-3 text-xs"
        >
          {{ label }}
        </div>
      </div>
      <ContributionGraph class="flex gap-1">
        <ContributionGraphGroup
          v-for="(week, weekIndex) in weeks"
          :key="weekIndex"
        >
          <ContributionGraphBlock
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :colors="colors"
            :level="getLevel(day.count)"
            :title="`${day.count} contributions on ${day.date}`"
            class="rounded-full"
          />
        </ContributionGraphGroup>
      </ContributionGraph>
      <div class="flex w-full items-center justify-between gap-4 py-2">
        <div class="text-muted-foreground text-sm">
          <span class="text-foreground font-medium">{{ totalActivities }}</span>
          activities in the last year
        </div>
        <div class="flex items-center gap-2">
          <span class="text-muted-foreground text-xs">Less</span>
          <div class="flex gap-1">
            <ContributionGraphBlock
              v-for="(_, index) in colors"
              :key="index"
              :colors="colors"
              :level="index"
              class="rounded-full"
            />
          </div>
          <span class="text-muted-foreground text-xs">More</span>
        </div>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      With Custom Legend and Rounded Full
    </p>
  </div>
</template>
