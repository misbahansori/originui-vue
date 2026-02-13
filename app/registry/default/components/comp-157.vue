<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { LucideStar } from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("all");

const starRatings = [
  { value: "all", label: "All reviews", count: 12921, stars: 0 },
  { value: "5-stars", label: "5 stars", count: 5168, stars: 5 },
  { value: "4-stars", label: "4 stars", count: 4726, stars: 4 },
  { value: "3-stars", label: "3 stars", count: 3234, stars: 3 },
  { value: "2-stars", label: "2 stars", count: 1842, stars: 2 },
  { value: "1-star", label: "1 star", count: 452, stars: 1 },
];
</script>

<template>
  <RadioGroup v-model="selectedValue">
    <div v-for="(rating, index) in starRatings" :key="rating.value" class="flex items-center gap-2">
      <RadioGroupItem :value="rating.value" :id="`${id}-${index + 1}`" />
      <Label :for="`${id}-${index + 1}`" class="inline-flex items-center gap-1">
        <template v-if="rating.stars > 0">
          <span class="inline-flex items-center text-amber-500" aria-hidden="true">
            <LucideStar
              v-for="star in 5"
              :key="star"
              :size="16"
              :class="{ 'opacity-30': star > rating.stars }"
            />
          </span>
          <span class="sr-only">{{ rating.label }}</span>
        </template>
        <template v-else>
          {{ rating.label }}
        </template>
        <span class="text-muted-foreground text-xs leading-[inherit] font-normal">
          ({{ rating.count.toLocaleString() }})
        </span>
      </Label>
    </div>
  </RadioGroup>
</template>
