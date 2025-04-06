<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with left text</Label>
    <Select default-value="1">
      <SelectTrigger :id="id">
        <span>
          Language:
          <SelectValue placeholder="Select a language" />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Javascript</SelectItem>
        <SelectItem value="2">Bash</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
