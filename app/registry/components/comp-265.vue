<script setup lang="ts">
import { computed, ref } from "vue";

// Define items with prices
const items = [
  { id: 1, price: 80 },
  { id: 2, price: 95 },
  { id: 3, price: 110 },
  { id: 4, price: 125 },
  { id: 5, price: 130 },
  { id: 6, price: 140 },
  { id: 7, price: 145 },
  { id: 8, price: 150 },
  { id: 9, price: 155 },
  { id: 10, price: 165 },
  { id: 11, price: 175 },
  { id: 12, price: 185 },
  { id: 13, price: 195 },
  { id: 14, price: 205 },
  { id: 15, price: 215 },
  // Simplified set of items for brevity
  { id: 30, price: 295 },
  { id: 45, price: 360 },
  { id: 60, price: 435 },
  { id: 75, price: 499 },
  { id: 90, price: 660 },
  { id: 105, price: 750 },
  { id: 120, price: 900 },
];

// TODO: This is a simplified version without the full useSliderWithInput implementation
const minValue = Math.min(...items.map((item) => item.price));
const maxValue = Math.max(...items.map((item) => item.price));
const sliderValue = ref([200, 780]);
const inputValues = ref(["200", "780"]);

// Calculate histogram data
const tick_count = 40;
const priceStep = computed(() => (maxValue - minValue) / tick_count);

const itemCounts = computed(() => {
  return Array(tick_count)
    .fill(0)
    .map((_, tick) => {
      const rangeMin = minValue + tick * priceStep.value;
      const rangeMax = minValue + (tick + 1) * priceStep.value;
      return items.filter(
        (item) => item.price >= rangeMin && item.price < rangeMax,
      ).length;
    });
});

const maxCount = computed(() => {
  const counts = itemCounts.value;
  return counts.length > 0 ? Math.max(...counts) : 0;
});

// Update input values when slider changes
function handleSliderChange() {
  if (sliderValue.value.length >= 2) {
    inputValues.value = [
      sliderValue.value[0].toString(),
      sliderValue.value[1].toString(),
    ];
  }
}

function isBarInSelectedRange(index: number) {
  const rangeMin = minValue + index * priceStep.value;
  const rangeMax = minValue + (index + 1) * priceStep.value;

  const [min, max] = sliderValue.value;
  return countItemsInRange(min, max) > 0 && rangeMin <= max && rangeMax >= min;
}

function countItemsInRange(min: number, max: number) {
  return items.filter((item) => item.price >= min && item.price <= max).length;
}
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Price slider</Label>
    <div>
      <!-- Histogram bars -->
      <div class="flex h-12 w-full items-end px-3" aria-hidden="true">
        <div
          v-for="(count, i) in itemCounts"
          :key="i"
          class="flex flex-1 justify-center"
          :style="{
            height: `${(count / maxCount) * 100}%`,
          }"
        >
          <span
            :data-selected="isBarInSelectedRange(i)"
            class="bg-primary/20 h-full w-full"
          ></span>
        </div>
      </div>
      <Slider
        v-model="sliderValue"
        :min="minValue"
        :max="maxValue"
        aria-label="Price range"
        @update:model-value="handleSliderChange"
      />
    </div>

    <!-- Inputs -->
    <div class="flex items-center justify-between gap-4">
      <div class="*:not-first:mt-1">
        <Label for="min-price">Min price</Label>
        <div class="relative">
          <Input
            id="min-price"
            class="peer w-full ps-6"
            type="text"
            inputmode="decimal"
            v-model="inputValues[0]"
            aria-label="Enter minimum price"
          />
          <span
            class="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50"
          >
            $
          </span>
        </div>
      </div>
      <div class="*:not-first:mt-1">
        <Label for="max-price">Max price</Label>
        <div class="relative">
          <Input
            id="max-price"
            class="peer w-full ps-6"
            type="text"
            inputmode="decimal"
            v-model="inputValues[1]"
            aria-label="Enter maximum price"
          />
          <span
            class="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50"
          >
            $
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
