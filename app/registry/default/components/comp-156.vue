<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { nextTick, ref, useTemplateRef, watch } from "vue";

const selectedValue = ref("without-expansion");
const inputRef = useTemplateRef("inputRef");

watch(selectedValue, (newValue) => {
  if (newValue !== "with-expansion") return;

  nextTick(() => {
    inputRef.value?.$el.focus();
  });
});
</script>

<template>
  <RadioGroup class="gap-6" v-model="selectedValue">
    <div>
      <div class="flex items-start gap-2">
        <RadioGroupItem
          value="with-expansion"
          :aria-controls="inputId"
        />
        <div class="grow">
          <div class="grid grow gap-2">
            <Label>Radio with expansion</Label>
            <p class="text-muted-foreground text-xs">
              You can use this radio with a label and a description.
            </p>
          </div>
          <!-- Expandable field -->
          <div
            role="region"
            class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100"
            :data-state="selectedValue === 'with-expansion' ? 'expanded' : 'collapsed'"
          >
            <div class="pointer-events-none -m-2 overflow-hidden p-2">
              <div class="pointer-events-auto mt-3">
                <Input
                  ref="inputRef"
                  type="text"
                  placeholder="Enter details"
                  aria-label="Additional Information"
                  :disabled="selectedValue !== 'with-expansion'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-start gap-2">
      <RadioGroupItem value="without-expansion" />
      <div class="grid grow gap-2">
        <Label>Radio without expansion</Label>
        <p class="text-muted-foreground text-xs">
          You can use this checkbox with a label and a description.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
