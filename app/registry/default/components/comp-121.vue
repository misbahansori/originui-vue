<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiTwitterXFill } from "@remixicon/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <Button variant="outline">
      <RiGoogleFill class="me-1 text-[#DB4437] dark:text-white/60" size="16" aria-hidden="true" />
      Login with Google
    </Button>
    <Button variant="outline">
      <RiTwitterXFill class="me-1 text-[#14171a] dark:text-white/60" size="16" aria-hidden="true" />
      Login with X
    </Button>
    <Button variant="outline">
      <RiFacebookFill class="me-1 text-[#1877f2] dark:text-white/60" size="16" aria-hidden="true" />
      Login with Facebook
    </Button>
    <Button variant="outline">
      <RiGithubFill class="me-1 text-[#333333] dark:text-white/60" size="16" aria-hidden="true" />
      Login with GitHub
    </Button>
  </div>
</template>
