<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import ToastAction from "@/registry/default/ui/toast/ToastAction.vue";
import Toaster from "@/registry/default/ui/toast/Toaster.vue";
import { useToast } from "@/registry/default/ui/toast/use-toast";
import { h } from "vue";

const { toast } = useToast();
</script>

<template>
  <Button
    variant="outline"
    @click="
      () => {
        toast({
          title: 'We couldn\'t complete your request!',
          description: 'There was a problem with your request.',
          action: h(
            ToastAction,
            {
              altText: 'Try again',
            },
            () => 'Try again',
          ),
        });
      }
    "
  >
    Show toast
  </Button>
  <!-- Place the Toaster at the end of the body -->
  <Toaster />
</template>
