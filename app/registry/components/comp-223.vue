<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with icon and right indicator</Label>
    <Select default-value="2">
      <SelectTrigger
        :id="id"
        class="[&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
      >
        <SelectItem value="1">
          <Icon name="logos:vue" size="16" aria-hidden="true" />
          <span class="truncate">Vue</span>
        </SelectItem>
        <SelectItem value="2">
          <Icon name="logos:nuxt-icon" size="16" aria-hidden="true" />
          <span class="truncate">Nuxt</span>
        </SelectItem>
        <SelectItem value="3">
          <Icon name="logos:vitejs" size="16" aria-hidden="true" />
          <span class="truncate">Vitesse</span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
