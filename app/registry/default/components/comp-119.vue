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
  <div class="inline-flex flex-wrap gap-2">
    <Button variant="outline" aria-label="Login with Google" size="icon">
      <RiGoogleFill size="16" aria-hidden="true" />
    </Button>
    <Button variant="outline" aria-label="Login with Facebook" size="icon">
      <RiFacebookFill size="16" aria-hidden="true" />
    </Button>
    <Button variant="outline" aria-label="Login with X" size="icon">
      <RiTwitterXFill size="16" aria-hidden="true" />
    </Button>
    <Button variant="outline" aria-label="Login with GitHub" size="icon">
      <RiGithubFill size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
