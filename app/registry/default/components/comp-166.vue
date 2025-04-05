<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("2");

const items = [
  { value: "1", label: "Hobby", price: "$9/mo" },
  { value: "2", label: "Plus", price: "$29/mo" },
  { value: "3", label: "Team", price: "$49/mo" },
  { value: "4", label: "Enterprise", price: "Custom" },
];
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Choose plan
    </legend>
    <RadioGroup
      class="gap-0 -space-y-px rounded-md shadow-xs"
      v-model="selectedValue"
    >
      <div
        v-for="item in items"
        :key="`${id}-${item.value}`"
        class="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <RadioGroupItem
              :id="`${id}-${item.value}`"
              :value="item.value"
              class="after:absolute after:inset-0"
              :aria-describedby="`${id}-${item.value}-price`"
            />
            <Label class="inline-flex items-start" :for="`${id}-${item.value}`">
              {{ item.label }}
              <Badge v-if="item.value === '2'" class="ms-2 -mt-1">
                Popular
              </Badge>
            </Label>
          </div>
          <div
            :id="`${id}-${item.value}-price`"
            class="text-muted-foreground text-xs leading-[inherit]"
          >
            {{ item.price }}
          </div>
        </div>
      </div>
    </RadioGroup>
  </fieldset>
</template>
