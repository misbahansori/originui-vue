<script setup lang="ts">
import { ref } from "vue";

const selectedKeys = ref(["lettuce", "tuna"]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Listbox with option groups</Label>
    <div class="border-input overflow-hidden rounded-md border">
      <ListBox
        class="bg-background max-h-72 min-h-20 space-y-2 overflow-auto p-1 text-sm shadow-xs transition-[color,box-shadow]"
        aria-label="Select some foods"
        selection-mode="multiple"
        v-model:selected-keys="selectedKeys"
      >
        <ListBoxSection class="space-y-1">
          <div class="text-muted-foreground px-2 py-1.5 text-xs font-medium">
            Veggies
          </div>
          <ListBoxItem
            id="lettuce"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Lettuce
          </ListBoxItem>
          <ListBoxItem
            id="tomato"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Tomato
          </ListBoxItem>
          <ListBoxItem
            id="onion"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Onion
          </ListBoxItem>
        </ListBoxSection>
        <Separator class="bg-border -mx-1 my-2 h-px" />
        <ListBoxSection class="space-y-1">
          <div class="text-muted-foreground px-2 py-1.5 text-xs font-medium">
            Protein
          </div>
          <ListBoxItem
            id="ham"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Ham
          </ListBoxItem>
          <ListBoxItem
            id="tuna"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Tuna
          </ListBoxItem>
          <ListBoxItem
            id="tofu"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Tofu
          </ListBoxItem>
        </ListBoxSection>
        <Separator class="bg-border -mx-1 my-2 h-px" />
        <ListBoxSection class="space-y-1">
          <div class="text-muted-foreground px-2 py-1.5 text-xs font-medium">
            Condiments
          </div>
          <ListBoxItem
            id="mayo"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Mayonaise
          </ListBoxItem>
          <ListBoxItem
            id="mustard"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Mustard
          </ListBoxItem>
          <ListBoxItem
            id="ranch"
            class="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Ranch
          </ListBoxItem>
        </ListBoxSection>
      </ListBox>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with
      <a
        class="hover:text-foreground underline"
        href="https://react-spectrum.adobe.com/react-aria/ListBox.html"
        target="_blank"
        rel="noopener nofollow"
      >
        React Aria
      </a>
    </p>
  </div>
</template>
