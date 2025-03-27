<script setup lang="ts">


const value = ref("center");
</script>

<template>
  <ToggleGroup
    class="divide-background inline-flex divide-x"
    type="single"
    v-model="value"
  >
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Left"
      value="left"
    >
      <Icon name="lucide:align-left" size="16" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Center"
      value="center"
    >
      <Icon name="lucide:align-center" size="16" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Right"
      value="right"
    >
      <Icon name="lucide:align-right" size="16" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Justify"
      value="justify"
    >
      <Icon name="lucide:align-justify" size="16" aria-hidden="true" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
