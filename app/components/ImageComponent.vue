<script setup lang="ts">
defineProps<{
  imageBasePath: string;
  alt: string;
}>();
</script>

<template>
  <img
    class="w-full dark:hidden"
    :src="`${imageBasePath}.png`"
    :alt="alt"
    width="268"
    height="198"
  />
  <img
    class="hidden w-full dark:block"
    :src="`${imageBasePath}-dark.png`"
    :alt="`${alt} dark`"
    width="268"
    height="198"
  />
</template>
