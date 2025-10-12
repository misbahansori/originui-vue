<script setup lang="ts">
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/default/ui/contribution-graph";

const data = ref(null);
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12">
    <ContributionGraph :data="data">
      <ContributionGraphCalendar>
        <template #default="{ activity, dayIndex, weekIndex }">
          <ContributionGraphBlock
            :activity="activity"
            :day-index="dayIndex"
            :week-index="weekIndex"
          />
        </template>
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount />
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  </div>
</template>
