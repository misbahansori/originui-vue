<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { ref } from "vue";

// TODO: This component uses a third-party library (react-phone-number-input)
// We need to find an equivalent Vue library or implement custom functionality
const phoneValue = ref("");
const selectedCountry = ref("US");

// Common country codes - this would be expanded in a real implementation
const countries = [
  { label: "United States", value: "US", code: "+1" },
  { label: "United Kingdom", value: "GB", code: "+44" },
  { label: "Canada", value: "CA", code: "+1" },
  { label: "Australia", value: "AU", code: "+61" },
];
</script>

<template>
  <div class="*:not-first:mt-2" dir="ltr">
    <Label>Phone number input</Label>
    <div class="flex rounded-md shadow-xs">
      <SelectNative
        class="text-muted-foreground hover:text-foreground w-fit rounded-e-none shadow-none"
      >
        <option
          v-for="country in countries"
          :key="country.value"
          :value="country.value"
        >
          {{ country.value }}
        </option>
      </SelectNative>
      <Input
        v-model="phoneValue"
        class="-ms-px rounded-s-none shadow-none focus-visible:z-10"
        placeholder="Enter phone number"
        type="tel"
      />
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Todo : Implement a phone number input component
    </p>
  </div>
</template>
