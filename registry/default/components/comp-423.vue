<script setup>
const id = useId();
</script>

<template>
  <Badge
    class="has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative outline-none has-focus-visible:ring-[3px]"
  >
    <Checkbox
      :id="id"
      class="peer sr-only after:absolute after:inset-0"
      :default-checked="true"
    />
    <Icon
      name="lucide:check"
      class="hidden size-4 peer-data-[state=checked]:block"
      aria-hidden="true"
    />
    <label
      :for="id"
      class="cursor-pointer select-none after:absolute after:inset-0"
    >
      Selectable
    </label>
  </Badge>
</template>
