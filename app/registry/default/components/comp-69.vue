<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Textarea with right button</Label>
    <Textarea :id="id" v-model="textValue" placeholder="Leave a comment" />
    <div class="flex justify-end">
      <Button variant="outline">Send</Button>
    </div>
  </div>
</template>
