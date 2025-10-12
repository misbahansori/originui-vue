<script setup lang="ts">
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphGroup,
} from "@/registry/default/ui/contribution-graph";

// Generate hardcoded flat data for 52 weeks, 7 days each (364 days total)
const generateData = () => {
  const days = [];
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 12);

  for (let i = 0; i < 364; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Random contribution count (0-12)
    const count = Math.floor(Math.random() * 13);

    days.push({
      date: currentDate.toISOString().split("T")[0],
      count: count,
    });
  }
  return days;
};

const data = ref(generateData());

// Convert flat data to weeks (chunk into groups of 7)
const weeks = computed(() => {
  const result = [];
  for (let i = 0; i < data.value.length; i += 7) {
    result.push(data.value.slice(i, i + 7));
  }
  return result;
});

// Calculate total contributions
const totalCount = computed(() => {
  return data.value.reduce((sum, day) => sum + (day?.count || 0), 0);
});

// Get color based on contribution count
const getColor = (count: number) => {
  if (count === 0) return "bg-muted";
  if (count < 3) return "bg-green-200 dark:bg-green-900/40";
  if (count < 6) return "bg-green-400 dark:bg-green-700/60";
  if (count < 9) return "bg-green-600 dark:bg-green-500/80";
  return "bg-green-700 dark:bg-green-400";
};
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12">
    <ContributionGraph>
      <div class="flex gap-1">
        <ContributionGraphGroup
          v-for="(week, weekIndex) in weeks"
          :key="weekIndex"
        >
          <ContributionGraphBlock
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :class="getColor(day.count)"
            :title="`${day.count} contributions on ${day.date}`"
          />
        </ContributionGraphGroup>
      </div>

      <div class="flex items-center justify-between gap-4">
        <div class="text-muted-foreground text-sm">
          <span class="text-foreground font-semibold">{{ totalCount }}</span>
          contributions in the last year
        </div>

        <div class="text-muted-foreground flex items-center gap-2 text-xs">
          <span>Less</span>
          <div class="flex gap-1">
            <div class="border-border/50 bg-muted h-3 w-3 rounded-sm border" />
            <div
              class="border-border/50 h-3 w-3 rounded-sm border bg-green-200 dark:bg-green-900/40"
            />
            <div
              class="border-border/50 h-3 w-3 rounded-sm border bg-green-400 dark:bg-green-700/60"
            />
            <div
              class="border-border/50 h-3 w-3 rounded-sm border bg-green-600 dark:bg-green-500/80"
            />
            <div
              class="border-border/50 h-3 w-3 rounded-sm border bg-green-700 dark:bg-green-400"
            />
          </div>
          <span>More</span>
        </div>
      </div>
    </ContributionGraph>
  </div>
</template>
