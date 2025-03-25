<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="group relative">
    <label
      :for="id"
      class="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
    >
      <span class="bg-background inline-flex px-2">
        Input with label animation
      </span>
    </label>
    <Input :id="id" type="email" placeholder=" " />
  </div>
</template>
