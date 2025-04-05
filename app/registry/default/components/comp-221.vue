<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with left text</Label>
    <Select default-value="1">
      <SelectTrigger :id="id">
        <span>
          Language:
          <SelectValue placeholder="Select a language" />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Javascript</SelectItem>
        <SelectItem value="2">Bash</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
