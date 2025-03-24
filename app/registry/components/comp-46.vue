<script setup lang="ts">
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
      <div
        class="border-input bg-background text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative inline-flex items-center self-stretch rounded-s-md border py-2 ps-3 pe-2 transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50"
      >
        <div class="inline-flex items-center gap-1" aria-hidden="true">
          <span class="w-5 overflow-hidden rounded-sm">
            <!-- Simplified flag display -->
            <Icon name="lucide:phone" :size="16" aria-hidden="true" />
          </span>
          <span class="text-muted-foreground/80">
            <Icon name="lucide:chevron-down" :size="16" aria-hidden="true" />
          </span>
        </div>
        <select
          v-model="selectedCountry"
          class="absolute inset-0 text-sm opacity-0"
          aria-label="Select country"
        >
          <option value="" disabled>Select a country</option>
          <option
            v-for="country in countries"
            :key="country.value"
            :value="country.value"
          >
            {{ country.label }} {{ country.code }}
          </option>
        </select>
      </div>
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
      <!-- TODO: This original component used react-phone-number-input -->
      Built with native Vue select and input elements
    </p>
  </div>
</template>
