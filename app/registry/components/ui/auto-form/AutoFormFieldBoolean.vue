<script setup lang="ts">
import { computed } from "vue";
import { Checkbox } from "~/registry/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/registry/components/ui/form";
import { Switch } from "~/registry/components/ui/switch";
import AutoFormLabel from "./AutoFormLabel.vue";
import type { FieldProps } from "./interface";
import { beautifyObjectName, maybeBooleanishToBoolean } from "./utils";

const props = defineProps<FieldProps>();

const booleanComponent = computed(() =>
  props.config?.component === "switch" ? Switch : Checkbox,
);
</script>

<template>
  <FormField v-slot="slotProps" :name="fieldName">
    <FormItem>
      <div class="mb-3 flex items-center gap-3 space-y-0">
        <FormControl>
          <slot v-bind="slotProps">
            <component
              :is="booleanComponent"
              :disabled="
                maybeBooleanishToBoolean(config?.inputProps?.disabled) ??
                disabled
              "
              :name="slotProps.componentField.name"
              :model-value="slotProps.componentField.modelValue"
              @update:model-value="
                slotProps.componentField['onUpdate:modelValue']
              "
            />
          </slot>
        </FormControl>
        <AutoFormLabel v-if="!config?.hideLabel" :required="required">
          {{ config?.label || beautifyObjectName(label ?? fieldName) }}
        </AutoFormLabel>
      </div>

      <FormDescription v-if="config?.description">
        {{ config.description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
