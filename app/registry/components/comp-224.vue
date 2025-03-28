<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with description and right indicator</Label>
    <Select default-value="2">
      <SelectTrigger :id="id" class="**:data-desc:hidden">
        <SelectValue placeholder="Choose a plan" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
      >
        <SelectItem value="1">
          Standard Plan
          <span class="text-muted-foreground mt-1 block text-xs" data-desc>
            Ideal for individuals
          </span>
        </SelectItem>
        <SelectItem value="2">
          Pro Plan
          <span class="text-muted-foreground mt-1 block text-xs" data-desc>
            For professional users
          </span>
        </SelectItem>
        <SelectItem value="3">
          Enterprise Plan
          <span class="text-muted-foreground mt-1 block text-xs" data-desc>
            Built for large teams
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
