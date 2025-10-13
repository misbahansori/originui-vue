<script setup lang="ts">
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphGroup,
} from "@/registry/default/ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

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

const formatDate = (dateString?: string) => {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <TooltipProvider>
        <ContributionGraph class="flex gap-1">
          <ContributionGraphGroup
            v-for="(week, weekIndex) in weeks"
            :key="weekIndex"
          >
            <Tooltip
              v-for="(day, dayIndex) in week"
              :key="dayIndex"
              :delay-duration="0"
            >
              <TooltipTrigger as-child>
                <ContributionGraphBlock
                  :level="getLevel(day.count)"
                  :title="`${day.count} contributions on ${day.date}`"
                />
              </TooltipTrigger>
              <TooltipContent
                side="top"
                class="bg-foreground text-background border-foreground"
              >
                <div class="text-xs">
                  <p class="font-medium">
                    {{ day.count }}
                    {{ day.count === 1 ? "contribution" : "contributions" }}
                  </p>
                  <p class="opacity-70">
                    {{ formatDate(day.date) }}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </ContributionGraphGroup>
        </ContributionGraph>
      </TooltipProvider>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      With Tooltip
    </p>
  </div>
</template>
