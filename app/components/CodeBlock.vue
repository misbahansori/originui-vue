<script setup lang="ts">
const props = defineProps<{
  code: string;
}>();
</script>

<template>
  <div
    class="[&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:bg-zinc-950! [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:bg-zinc-900!"
  >
    <pre>{{ code }}</pre>
  </div>
</template>
