<script setup lang="ts">
const id = useId();
const selectedValue = ref("1");
</script>

<template>
  <RadioGroup class="gap-2" v-model="selectedValue">
    <!-- Radio card #1 -->
    <div
      class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
    >
      <RadioGroupItem
        value="1"
        :id="`${id}-1`"
        :aria-describedby="`${id}-1-description`"
        class="order-1 after:absolute after:inset-0"
      />
      <div class="grid grow gap-2">
        <Label :for="`${id}-1`">
          Label
          <span
            class="text-muted-foreground text-xs leading-[inherit] font-normal"
          >
            (Sublabel)
          </span>
        </Label>
        <p :id="`${id}-1-description`" class="text-muted-foreground text-xs">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
    <!-- Radio card #2 -->
    <div
      class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
    >
      <RadioGroupItem
        value="2"
        :id="`${id}-2`"
        :aria-describedby="`${id}-2-description`"
        class="order-1 after:absolute after:inset-0"
      />
      <div class="grid grow gap-2">
        <Label :for="`${id}-2`">
          Label
          <span
            class="text-muted-foreground text-xs leading-[inherit] font-normal"
          >
            (Sublabel)
          </span>
        </Label>
        <p :id="`${id}-2-description`" class="text-muted-foreground text-xs">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
