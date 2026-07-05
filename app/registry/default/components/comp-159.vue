<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref } from "vue";

const selectedValue = ref("1");
</script>

<template>
  <RadioGroup class="gap-2" v-model="selectedValue">
    <!-- Radio card #1 -->
    <div
      class="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
    >
      <RadioGroupItem
        value="1"
        class="order-1 after:absolute after:inset-0"
      />
      <div class="grid grow gap-2">
        <Label>
          Label
          <span class="text-muted-foreground text-xs leading-[inherit] font-normal">
            (Sublabel)
          </span>
        </Label>
        <p class="text-muted-foreground text-xs">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
    <!-- Radio card #2 -->
    <div
      class="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
    >
      <RadioGroupItem
        value="2"
        class="order-1 after:absolute after:inset-0"
      />
      <div class="grid grow gap-2">
        <Label>
          Label
          <span class="text-muted-foreground text-xs leading-[inherit] font-normal">
            (Sublabel)
          </span>
        </Label>
        <p class="text-muted-foreground text-xs">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
