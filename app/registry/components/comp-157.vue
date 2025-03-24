<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("all");
</script>

<template>
  <RadioGroup v-model="selectedValue">
    <div class="flex items-center gap-2">
      <RadioGroupItem value="all" :id="`${id}-1`" />
      <Label :for="`${id}-1`">
        All reviews
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (12,921)
        </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="5-stars" :id="`${id}-2`" />
      <Label :for="`${id}-2`" class="inline-flex items-center gap-1">
        <span
          class="inline-flex items-center text-amber-500"
          aria-hidden="true"
        >
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
        </span>
        <span class="sr-only">5 stars</span>
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (5,168)
        </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="4-stars" :id="`${id}-3`" />
      <Label :for="`${id}-3`" class="inline-flex items-center gap-1">
        <span
          class="inline-flex items-center text-amber-500"
          aria-hidden="true"
        >
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
        </span>
        <span class="sr-only">4 stars</span>
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (4,726)
        </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="3-stars" :id="`${id}-4`" />
      <Label :for="`${id}-4`" class="inline-flex items-center gap-1">
        <span
          class="inline-flex items-center text-amber-500"
          aria-hidden="true"
        >
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
        </span>
        <span class="sr-only">3 stars</span>
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (3,234)
        </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="2-stars" :id="`${id}-5`" />
      <Label :for="`${id}-5`" class="inline-flex items-center gap-1">
        <span
          class="inline-flex items-center text-amber-500"
          aria-hidden="true"
        >
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
        </span>
        <span class="sr-only">2 stars</span>
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (1,842)
        </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="1-star" :id="`${id}-6`" />
      <Label :for="`${id}-6`" class="inline-flex items-center gap-1">
        <span
          class="inline-flex items-center text-amber-500"
          aria-hidden="true"
        >
          <Icon name="remix:star-fill" size="16" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
          <Icon name="remix:star-fill" size="16" class="opacity-30" />
        </span>
        <span class="sr-only">1 star</span>
        <span
          class="text-muted-foreground text-xs leading-[inherit] font-normal"
        >
          (452)
        </span>
      </Label>
    </div>
  </RadioGroup>
</template>
