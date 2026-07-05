<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref } from "vue";

const selectedValue = ref("1");
</script>

<template>
  <RadioGroup class="gap-6" v-model="selectedValue">
    <div class="flex items-start gap-2">
      <RadioGroupItem value="1" />
      <div class="grid grow gap-2">
        <Label>
          Small
          <span class="text-muted-foreground text-xs leading-[inherit] font-normal">
            (Sublabel)
          </span>
        </Label>
        <p class="text-muted-foreground text-xs">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <RadioGroupItem value="2" />
      <div class="grid grow gap-2">
        <Label>
          Large
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
