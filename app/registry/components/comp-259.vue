<script setup lang="ts">


const minValue = 0;
const maxValue = 200;
const steps = 5;
const value = ref<number[]>([100]);

const decreaseValue = () => {
  const currentValue =
    value.value && value.value.length > 0 ? value.value[0] : minValue;
  value.value = [Math.max(minValue, currentValue - steps)];
};

const increaseValue = () => {
  const currentValue =
    value.value && value.value.length > 0 ? value.value[0] : minValue;
  value.value = [Math.min(maxValue, currentValue + steps)];
};
</script>

<template>
  <div class="*:not-first:mt-3">
    <Label class="tabular-nums">{{ value[0] || 0 }} credits/mo</Label>
    <div class="flex items-center gap-4">
      <div>
        <Button
          variant="outline"
          size="icon"
          class="size-8"
          aria-label="Decrease value"
          @click="decreaseValue"
          :disabled="(value[0] || 0) === 0"
        >
          <Icon name="lucide:minus" size="16" aria-hidden="true" />
        </Button>
      </div>
      <Slider
        class="grow"
        v-model="value"
        :min="minValue"
        :max="maxValue"
        :step="steps"
        aria-label="Dual range slider with buttons"
      />
      <div>
        <Button
          variant="outline"
          size="icon"
          class="size-8"
          aria-label="Increase value"
          @click="increaseValue"
          :disabled="(value[0] || 0) === 200"
        >
          <Icon name="lucide:plus" size="16" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </div>
</template>
