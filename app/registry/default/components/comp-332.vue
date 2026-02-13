<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { LucideArrowRight } from "lucide-vue-next";
import { ref } from "vue";

const step = ref(1);

const stepContent = [
  {
    title: "Welcome to Origin UI",
    description:
      "Discover a powerful collection of components designed to enhance your development workflow.",
  },
  {
    title: "Customizable Components",
    description:
      "Each component is fully customizable and built with modern web standards in mind.",
  },
  {
    title: "Ready to Start?",
    description: "Begin building amazing interfaces with our comprehensive component library.",
  },
  {
    title: "Get Support",
    description:
      "Access our extensive documentation and community resources to make the most of Origin UI.",
  },
] as const;

const totalSteps = stepContent.length;

const handleContinue = () => {
  if (step.value < totalSteps) {
    step.value++;
  }
};

const handleOpenChange = (open: boolean) => {
  if (open) {
    step.value = 1;
  }
};
</script>

<template>
  <Dialog @update:open="handleOpenChange">
    <DialogTrigger asChild>
      <Button variant="outline">Onboarding</Button>
    </DialogTrigger>
    <DialogContent class="gap-0 p-0 [&>button:last-child]:text-white">
      <div class="p-2">
        <img
          class="w-full rounded-md"
          src="/dialog-content.png"
          width="382"
          height="216"
          alt="dialog"
        />
      </div>
      <div class="space-y-6 px-6 pt-3 pb-6">
        <DialogHeader>
          <DialogTitle>{{ stepContent[step - 1]?.title }}</DialogTitle>
          <DialogDescription>
            {{ stepContent[step - 1]?.description }}
          </DialogDescription>
        </DialogHeader>
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div class="flex justify-center space-x-1.5 max-sm:order-1">
            <template v-for="index in totalSteps" :key="index">
              <div
                class="size-1.5 rounded-full"
                :class="index === step ? 'bg-primary' : 'bg-primary opacity-20'"
              />
            </template>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">Skip</Button>
            </DialogClose>
            <template v-if="step < totalSteps">
              <Button class="group" type="button" @click="handleContinue">
                Next
                <LucideArrowRight
                  class="-me-1 size-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </template>
            <template v-else>
              <DialogClose asChild>
                <Button type="button">Okay</Button>
              </DialogClose>
            </template>
          </DialogFooter>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
