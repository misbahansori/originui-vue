<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Toaster } from "@/registry/default/ui/sonner";
import { toast } from "vue-sonner";
</script>

<template>
  <Button
    variant="outline"
    @click="
      () => {
        toast('Your request was completed!', {
          description: 'It was a long journey, but we made it!',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        });
      }
    "
  >
    Show sonner
  </Button>
  <Toaster />
</template>
