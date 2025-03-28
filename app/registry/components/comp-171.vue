<script setup lang="ts">
const id = useId();
const hoverRating = ref("");
const currentRating = ref("");

const setHoverRating = (value: string) => {
  hoverRating.value = value;
};

const clearHoverRating = () => {
  hoverRating.value = "";
};

const handleValueChange = (value: string) => {
  currentRating.value = value;
};

const stars = ["1", "2", "3", "4", "5"];
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Rate your experience
    </legend>
    <RadioGroup
      class="inline-flex gap-0"
      :value="currentRating"
      @update:value="handleValueChange"
    >
      <label
        v-for="value in stars"
        :key="value"
        class="group focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer items-center justify-center rounded p-0.5 outline-none focus-within:ring-[3px]"
        @mouseenter="setHoverRating(value)"
        @mouseleave="clearHoverRating"
      >
        <RadioGroupItem :id="`${id}-${value}`" :value="value" class="sr-only" />
        <Icon
          name="ri:star-fill"
          size="24"
          :class="`transition-all ${
            (hoverRating || currentRating) >= value
              ? 'text-amber-500'
              : 'text-input'
          } group-hover:scale-110`"
        />
        <span class="sr-only">
          {{ value }} star{{ value === "1" ? "" : "s" }}
        </span>
      </label>
    </RadioGroup>
  </fieldset>
</template>
