<script setup lang="ts">
const checkboxId = useId();
const inputId = useId();
const checked = ref(false);
const inputRef = useTemplateRef("inputRef");

watch(checked, (newValue) => {
  if (newValue === true && inputRef.value) {
    nextTick(() => {
      inputRef.value?.$el.focus();
    });
  }
});
</script>

<template>
  <div>
    <div class="flex items-start gap-2">
      <Checkbox
        :id="checkboxId"
        v-model="checked"
        :aria-describedby="`${checkboxId}-description`"
        :aria-controls="inputId"
      />
      <div class="grow">
        <div class="grid gap-2">
          <Label :for="checkboxId">Checkbox with expansion</Label>
          <p
            :id="`${checkboxId}-description`"
            class="text-muted-foreground text-xs"
          >
            You can use this checkbox with a label and a description.
          </p>
        </div>
        <!-- Expandable field -->
        <div
          role="region"
          :id="inputId"
          :aria-labelledby="checkboxId"
          class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100"
          :data-state="checked ? 'expanded' : 'collapsed'"
        >
          <div class="pointer-events-none -m-2 overflow-hidden p-2">
            <div class="pointer-events-auto mt-3">
              <Input
                ref="inputRef"
                type="text"
                id="checkbox-11-additional-info"
                placeholder="Enter details"
                aria-label="Additional Information"
                :disabled="!checked"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
