<script setup lang="ts">
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineItem,
} from "@/registry/default/ui/timeline";

const items = [
  {
    id: 1,
    date: new Date("2024-01-09T10:55:00"),
    description: "System backup completed successfully.",
  },
  {
    id: 2,
    date: new Date("2024-01-09T10:50:00"),
    description:
      "User authentication service restarted due to configuration update.",
  },
  {
    id: 3,
    date: new Date("2024-01-09T10:45:00"),
    description: "Warning: High CPU usage detected on worker node-03.",
  },
  {
    id: 4,
    date: new Date("2024-01-09T10:40:00"),
    description: "New deployment initiated for api-service v2.1.0.",
  },
];
</script>

<template>
  <Timeline class="divide-y rounded-lg border">
    <TimelineItem
      v-for="item in items"
      :key="item.id"
      :step="item.id"
      class="m-0! px-4! py-3!"
    >
      <TimelineContent class="text-foreground">
        {{ item.description }}
        <TimelineDate class="mt-1">
          {{
            item.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
          at
          {{
            item.date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
          }}
        </TimelineDate>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
