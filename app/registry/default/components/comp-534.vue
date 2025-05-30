<script setup lang="ts">
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry/default/ui/timeline";
import { LucideCheck } from "lucide-vue-next";

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description:
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description:
      "Backend API implementation and frontend component development in progress.",
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description:
      "Quality assurance testing, performance optimization, and production deployment preparation.",
  },
];
</script>

<template>
  <Timeline :default-value="3">
    <TimelineItem
      v-for="item in items"
      :key="item.id"
      :step="item.id"
      class="group-data-[orientation=vertical]/timeline:ms-10"
    >
      <TimelineHeader>
        <TimelineSeparator
          class="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5"
        />
        <TimelineDate>{{ item.date }}</TimelineDate>
        <TimelineTitle>{{ item.title }}</TimelineTitle>
        <TimelineIndicator
          class="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7"
        >
          <LucideCheck
            :size="16"
            class="group-not-data-completed/timeline-item:hidden"
          />
        </TimelineIndicator>
      </TimelineHeader>
      <TimelineContent>{{ item.description }}</TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
