<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { LucideRefreshCcw } from "lucide-vue-next";
import { ref } from "vue";

const id = useId();
const selectedPlan = ref("2");

const plans = [
  {
    id: "1",
    name: "Essential",
    price: "$4 per member/month",
  },
  {
    id: "2",
    name: "Standard",
    price: "$19 per member/month",
  },
  {
    id: "3",
    name: "Enterprise",
    price: "$32 per member/month",
  },
];

const features = [
  {
    id: "1",
    name: "Create unlimited projects",
  },
  {
    id: "2",
    name: "Remove watermarks",
  },
  {
    id: "3",
    name: "Add unlimited users and free viewers",
  },
  {
    id: "4",
    name: "Upload unlimited files",
  },
  {
    id: "5",
    name: "7-day money back guarantee",
  },
  {
    id: "6",
    name: "Advanced permissions",
  },
];
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Change plan</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="mb-2 flex flex-col gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideRefreshCcw class="size-4 opacity-80" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Change your plan</DialogTitle>
          <DialogDescription class="text-left">
            Pick one of the following plans.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <RadioGroup v-model="selectedPlan" class="gap-2">
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent relative flex w-full items-center gap-2 rounded-md border px-4 py-3 shadow-xs outline-none"
          >
            <RadioGroupItem
              :value="plan.id"
              :id="`${id}-${plan.id}`"
              :aria-describedby="`${id}-${plan.id}-description`"
              class="order-1 after:absolute after:inset-0"
            />
            <div class="grid grow gap-1">
              <Label :htmlFor="`${id}-${plan.id}`">{{ plan.name }}</Label>
              <p
                :id="`${id}-${plan.id}-description`"
                class="text-muted-foreground text-xs"
              >
                {{ plan.price }}
              </p>
            </div>
          </div>
        </RadioGroup>

        <div class="space-y-3">
          <p>
            <strong class="text-sm font-medium">Features include:</strong>
          </p>
          <ul class="text-muted-foreground space-y-2 text-sm">
            <li
              v-for="feature in features"
              :key="feature.id"
              class="flex gap-2"
            >
              <LucideCheck
                class="text-primary mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {{ feature.name }}
            </li>
          </ul>
        </div>

        <div class="grid gap-2">
          <Button type="button" class="w-full">Change plan</Button>
          <DialogClose asChild>
            <Button type="button" variant="ghost" class="w-full">Cancel</Button>
          </DialogClose>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>
