<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Simple input</Label>
    <Input :id="id" placeholder="Email" type="email" />
  </div>
</template>
