<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { LucideBell } from "lucide-vue-next";
import { computed, ref } from "vue";

interface Notification {
  id: number;
  image: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  unread: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    image: "/avatar-80-01.jpg",
    user: "Chris Tompson",
    action: "requested review on",
    target: "PR #42: Feature implementation",
    timestamp: "15 minutes ago",
    unread: true,
  },
  {
    id: 2,
    image: "/avatar-80-02.jpg",
    user: "Emma Davis",
    action: "shared",
    target: "New component library",
    timestamp: "45 minutes ago",
    unread: true,
  },
  {
    id: 3,
    image: "/avatar-80-03.jpg",
    user: "James Wilson",
    action: "assigned you to",
    target: "API integration task",
    timestamp: "4 hours ago",
    unread: false,
  },
  {
    id: 4,
    image: "/avatar-80-04.jpg",
    user: "Alex Morgan",
    action: "replied to your comment in",
    target: "Authentication flow",
    timestamp: "12 hours ago",
    unread: false,
  },
  {
    id: 5,
    image: "/avatar-80-05.jpg",
    user: "Sarah Chen",
    action: "commented on",
    target: "Dashboard redesign",
    timestamp: "2 days ago",
    unread: false,
  },
  {
    id: 6,
    image: "/avatar-80-06.jpg",
    user: "Miky Derya",
    action: "mentioned you in",
    target: "Origin UI open graph image",
    timestamp: "2 weeks ago",
    unread: false,
  },
];

const notifications = ref<Notification[]>(initialNotifications);
const unreadCount = computed(
  () => notifications.value.filter((n) => n.unread).length,
);

const handleMarkAllAsRead = () => {
  notifications.value = notifications.value.map((notification) => ({
    ...notification,
    unread: false,
  }));
};

const handleNotificationClick = (id: number) => {
  notifications.value = notifications.value.map((notification) =>
    notification.id === id ? { ...notification, unread: false } : notification,
  );
};
</script>

<template>
  <Popover>
    <PopoverTrigger asChild>
      <Button
        size="icon"
        variant="outline"
        class="relative"
        aria-label="Open notifications"
      >
        <LucideBell class="size-4" aria-hidden="true" />
        <Badge
          v-if="unreadCount > 0"
          class="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1"
        >
          {{ unreadCount > 99 ? "99+" : unreadCount }}
        </Badge>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80 p-1">
      <div class="flex items-baseline justify-between gap-4 px-3 py-2">
        <div class="text-sm font-semibold">Notifications</div>
        <button
          v-if="unreadCount > 0"
          class="text-xs font-medium hover:underline"
          @click="handleMarkAllAsRead"
        >
          Mark all as read
        </button>
      </div>
      <div
        role="separator"
        aria-orientation="horizontal"
        class="bg-border -mx-1 my-1 h-px"
      ></div>
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors"
      >
        <div class="relative flex items-start gap-3 pe-3">
          <img
            class="size-9 rounded-md"
            :src="notification.image"
            width="32"
            height="32"
            :alt="notification.user"
          />
          <div class="flex-1 space-y-1">
            <button
              class="text-foreground/80 text-left after:absolute after:inset-0"
              @click="() => handleNotificationClick(notification.id)"
            >
              <span class="text-foreground font-medium hover:underline">
                {{ notification.user }}
              </span>
              {{ notification.action }}
              <span class="text-foreground font-medium hover:underline">
                {{ notification.target }}
              </span>
              .
            </button>
            <div class="text-muted-foreground text-xs">
              {{ notification.timestamp }}
            </div>
          </div>
          <div v-if="notification.unread" class="absolute end-0 self-center">
            <svg
              width="6"
              height="6"
              fill="currentColor"
              viewBox="0 0 6 6"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="3" cy="3" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
