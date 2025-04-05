<script setup lang="ts">
type ActionType = "post" | "reply" | "edit" | "create";

const items: {
  id: number;
  user: string;
  image: string;
  action: ActionType;
  date: Date;
}[] = [
  {
    id: 1,
    user: "Matt",
    image: "/avatar-40-02.jpg",
    action: "post",
    date: new Date(Date.now() - 59000), // 59 seconds ago
  },
  {
    id: 2,
    user: "Matt",
    image: "/avatar-40-02.jpg",
    action: "reply",
    date: new Date(Date.now() - 180000), // 3 minutes ago
  },
  {
    id: 3,
    user: "Matt",
    image: "/avatar-40-02.jpg",
    action: "edit",
    date: new Date(Date.now() - 300000), // 5 minutes ago
  },
  {
    id: 4,
    user: "Matt",
    image: "/avatar-40-02.jpg",
    action: "create",
    date: new Date(Date.now() - 600000), // 10 minutes ago
  },
];

const getActionIcon = (action: ActionType): string => {
  const icons: Record<ActionType, string> = {
    post: "lucide:book-open",
    reply: "lucide:message-circle",
    edit: "lucide:pencil",
    create: "lucide:plus",
  };
  return icons[action];
};

const getActionText = (action: ActionType): string => {
  const texts: Record<ActionType, string> = {
    post: "wrote a new post",
    reply: "replied to a comment",
    edit: "edited a post",
    create: "created a new project",
  };
  return texts[action];
};

const getRelativeTimeString = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
};
</script>

<template>
  <div class="space-y-3">
    <div class="text-muted-foreground text-xs font-medium">Activity</div>
    <Timeline>
      <TimelineItem
        v-for="item in items"
        :key="item.id"
        :step="item.id"
        class="m-0! flex-row items-center gap-3 py-2.5!"
      >
        <Icon
          :name="getActionIcon(item.action)"
          class="text-muted-foreground/80"
          size="16"
        />
        <img :src="item.image" :alt="item.user" class="size-6 rounded-full" />
        <TimelineContent class="text-foreground">
          <a class="font-medium hover:underline" href="#">{{ item.user }}</a>
          <span class="font-normal">
            {{ getActionText(item.action) }}
            <a class="hover:underline" href="#">
              {{ getRelativeTimeString(item.date) }}
            </a>
          </span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
</template>
