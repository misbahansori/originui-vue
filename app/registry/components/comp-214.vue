<script setup lang="ts">
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with separator</Label>
    <Select default-value="1">
      <SelectTrigger :id="id">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          <SelectItem value="1">Vue</SelectItem>
          <SelectItem value="2">Nuxt</SelectItem>
          <SelectItem value="3">Svelte</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          <SelectItem value="4">Node.js</SelectItem>
          <SelectItem value="5">Python</SelectItem>
          <SelectItem value="6">Java</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
