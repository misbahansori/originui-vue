<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/vue";
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button
      class="flex-1"
      variant="outline"
      aria-label="Login with Google"
      size="icon"
    >
      <RiGoogleFill
        class="dark:text-primary text-[#DB4437]"
        size="16"
        aria-hidden="true"
      />
    </Button>
    <Button
      class="flex-1"
      variant="outline"
      aria-label="Login with Facebook"
      size="icon"
    >
      <RiFacebookFill
        class="dark:text-primary text-[#1877f2]"
        size="16"
        aria-hidden="true"
      />
    </Button>
    <Button
      class="flex-1"
      variant="outline"
      aria-label="Login with X"
      size="icon"
    >
      <RiTwitterXFill
        class="dark:text-primary text-[#14171a]"
        size="16"
        aria-hidden="true"
      />
    </Button>
    <Button
      class="flex-1"
      variant="outline"
      aria-label="Login with GitHub"
      size="icon"
    >
      <RiGithubFill
        class="dark:text-primary text-black"
        size="16"
        aria-hidden="true"
      />
    </Button>
  </div>
</template>
