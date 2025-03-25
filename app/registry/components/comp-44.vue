<script setup lang="ts">
const id = useId();
const value = ref(["", "", "", "", ""]);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      OTP input single
    </Label>
    <PinInput id="pin-input" v-model="value" placeholder="○">
      <PinInputGroup>
        <PinInputInput
          v-for="(id, index) in 5"
          :key="id"
          :index="index"
          class="size-9"
        />
      </PinInputGroup>
    </PinInput>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with shadcn-vue
      <a
        class="hover:text-foreground underline"
        href="https://www.shadcn-vue.com/docs/components/pin-input.html"
        target="_blank"
        rel="noopener nofollow"
      >
        PinInput
      </a>
    </p>
  </div>
</template>
