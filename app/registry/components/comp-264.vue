<script setup lang="ts">
// TODO: This is a simplified version without the full useSliderWithInput implementation

// X, Y, Z slider values
const xValue = ref([-2]);
const yValue = ref([4]);
const zValue = ref([2]);

// X, Y, Z input values
const xInput = ref("-2");
const yInput = ref("4");
const zInput = ref("2");

// Store reset functions
const resetFunctions = ref<(() => void)[]>([]);

function resetAll() {
  xValue.value = [0];
  yValue.value = [0];
  zValue.value = [0];
  xInput.value = "0";
  yInput.value = "0";
  zInput.value = "0";
}

// Update input values when sliders change
function updateXInput() {
  xInput.value = xValue.value[0]?.toString() || "-2";
}

function updateYInput() {
  yInput.value = yValue.value[0]?.toString() || "4";
}

function updateZInput() {
  zInput.value = zValue.value[0]?.toString() || "2";
}
</script>

<template>
  <div class="space-y-4">
    <legend class="text-foreground text-sm font-medium">Object position</legend>
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <Label class="text-muted-foreground text-xs">X</Label>
        <Slider
          class="grow [&>:last-child]:rounded"
          v-model="xValue"
          :min="-10"
          :max="10"
          aria-label="X"
          @update:model-value="updateXInput"
        />
        <Input
          class="h-8 w-12 px-2 py-1"
          type="text"
          inputmode="decimal"
          v-model="xInput"
          aria-label="Enter value"
        />
      </div>
      <div class="flex items-center gap-2">
        <Label class="text-muted-foreground text-xs">Y</Label>
        <Slider
          class="grow [&>:last-child]:rounded"
          v-model="yValue"
          :min="-10"
          :max="10"
          aria-label="Y"
          @update:model-value="updateYInput"
        />
        <Input
          class="h-8 w-12 px-2 py-1"
          type="text"
          inputmode="decimal"
          v-model="yInput"
          aria-label="Enter value"
        />
      </div>
      <div class="flex items-center gap-2">
        <Label class="text-muted-foreground text-xs">Z</Label>
        <Slider
          class="grow [&>:last-child]:rounded"
          v-model="zValue"
          :min="-10"
          :max="10"
          aria-label="Z"
          @update:model-value="updateZInput"
        />
        <Input
          class="h-8 w-12 px-2 py-1"
          type="text"
          inputmode="decimal"
          v-model="zInput"
          aria-label="Enter value"
        />
      </div>
    </div>
    <Button class="w-full" variant="outline" @click="resetAll">
      <Icon
        name="lucide:rotate-ccw"
        class="-ms-1 opacity-60"
        size="16"
        aria-hidden="true"
      />
      Reset
    </Button>
  </div>
</template>
