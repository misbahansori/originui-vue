<script setup lang="ts">
import { useCountdown } from "@vueuse/core";
import { ref } from "vue";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// Define the sale end date - eg: new Date('2024-12-31T23:59:59')
const saleEndDate = new Date(
  Date.now() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000 + 24 * 1000,
); // Setting 9h 45m 24s from now for demo purposes

const isVisible = ref(true);
const timeLeft = ref<TimeLeft>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isExpired: false,
});

const totalSeconds = Math.max(
  0,
  Math.floor((saleEndDate.getTime() - Date.now()) / 1000),
);

const { remaining } = useCountdown(totalSeconds, {
  onTick() {
    const seconds = remaining.value;
    if (seconds <= 0) {
      timeLeft.value = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
      return;
    }

    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    timeLeft.value = {
      days,
      hours,
      minutes,
      seconds: remainingSeconds,
      isExpired: false,
    };
  },
  immediate: true,
});

const hideBanner = () => {
  isVisible.value = false;
};
</script>

<template>
  <div
    v-if="isVisible && !timeLeft.isExpired"
    class="dark bg-muted text-foreground px-4 py-3"
  >
    <div class="flex gap-2 md:items-center">
      <div class="flex grow gap-3 md:items-center">
        <div
          class="bg-primary/15 flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
          aria-hidden="true"
        >
          <Icon name="lucide:ticket-percent" class="size-4 opacity-80" />
        </div>
        <div
          class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center"
        >
          <div class="space-y-0.5">
            <p class="text-sm font-medium">Black Friday Sale!</p>
            <p class="text-muted-foreground text-sm">
              It kicks off today and is available for just 24 hours—don't miss
              out!
            </p>
          </div>
          <div class="flex gap-3 max-md:flex-wrap">
            <div
              class="divide-primary-foreground bg-primary/15 flex items-center divide-x rounded-md text-sm tabular-nums"
            >
              <span
                v-if="timeLeft.days > 0"
                class="flex h-8 items-center justify-center p-2"
              >
                {{ timeLeft.days }}
                <span class="text-muted-foreground">d</span>
              </span>
              <span class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.hours.toString().padStart(2, "0") }}
                <span class="text-muted-foreground">h</span>
              </span>
              <span class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.minutes.toString().padStart(2, "0") }}
                <span class="text-muted-foreground">m</span>
              </span>
              <span class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.seconds.toString().padStart(2, "0") }}
                <span class="text-muted-foreground">s</span>
              </span>
            </div>
            <Button size="sm" class="text-sm">Shop now</Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        @click="hideBanner"
        aria-label="Close banner"
      >
        <Icon
          name="lucide:x"
          class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
