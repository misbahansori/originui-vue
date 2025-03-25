<script setup lang="ts">
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Options with icon</Label>
    <Select default-value="3">
      <SelectTrigger
        :id="id"
        class="[&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
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
