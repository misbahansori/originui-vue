<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { ref } from "vue";

const min_price = 5;
const max_price = 1240;
const value = ref([min_price, max_price]);

const formatPrice = (price: number) => {
  return price === max_price ? `$${price.toLocaleString()}+` : `$${price.toLocaleString()}`;
};
</script>

<template>
  <div class="*:not-first:mt-3">
    <Label class="tabular-nums">
      From {{ formatPrice(value[0] || min_price) }} to
      {{ formatPrice(value[1] || max_price) }}
    </Label>
    <div class="flex items-center gap-4">
      <Slider v-model="value" :min="min_price" :max="max_price" aria-label="Price range slider" />
      <Button variant="outline">Go</Button>
    </div>
  </div>
</template>
