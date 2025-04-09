<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/registry/default/ui/toast";
import { useCountdown } from "@vueuse/core";
import { LucideCircleCheck, LucideX } from "lucide-vue-next";
import { ref } from "vue";

const durationInSeconds = 5;
const interval = 100;
const initialCountdown = (durationInSeconds * 1000) / interval;

const { pause, resume, start, remaining, reset } = useCountdown(
  initialCountdown,
  {
    interval,
    onComplete: () => {
      open.value = false;
    },
    immediate: false,
  },
);

const handleOpenChange = (value: boolean) => {
  open.value = value;
  if (value) {
    reset();
    start();
  }
};

const handleButtonClick = () => {
  if (open.value) {
    open.value = false;
    setTimeout(() => {
      handleOpenChange(true);
    }, 150);
  } else {
    handleOpenChange(true);
  }
};

const open = ref(false);
</script>

<template>
  <ToastProvider>
    <Button variant="outline" @click="handleButtonClick">Show toast</Button>
    <Toast
      :open="open"
      @openChange="handleOpenChange"
      @pause="pause"
      @resume="resume"
    >
      <div class="flex w-full justify-between gap-3">
        <LucideCircleCheck
          class="mt-0.5 size-4 shrink-0 text-emerald-500"
          aria-hidden="true"
        />
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <ToastTitle>Your request was completed!</ToastTitle>
            <ToastDescription>
              It demonstrates that the task or request has been processed.
            </ToastDescription>
          </div>
          <div>
            <ToastAction altText="Undo changes" asChild>
              <Button size="sm">Undo changes</Button>
            </ToastAction>
          </div>
        </div>
        <ToastClose as-child>
          <Button
            variant="ghost"
            class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
            aria-label="Close notification"
          >
            <LucideX
              class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </Button>
        </ToastClose>
      </div>
      <div class="contents" aria-hidden="true">
        <div
          class="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-emerald-500 transition-all duration-100"
          :style="{
            width: `${(remaining / initialCountdown) * 100}%`,
            transition: 'width 100ms linear',
          }"
        />
      </div>
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
