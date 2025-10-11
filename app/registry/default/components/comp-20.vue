<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { LucideDownload } from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end icon button</Label>
    <ButtonGroup class="w-full">
      <Input :id="id" placeholder="Email" type="email" />
      <Button
        class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-9 items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Subscribe"
      >
        <LucideDownload :size="16" aria-hidden="true" />
      </Button>
    </ButtonGroup>
  </div>
</template>
