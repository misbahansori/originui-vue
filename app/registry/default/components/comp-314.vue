<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/default/ui/alert-dialog";
import { Button } from "@/registry/default/ui/button";
import { LucideCircleAlert } from "lucide-vue-next";
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Alert dialog with icon</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <div class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideCircleAlert class="size-4 opacity-80" aria-hidden="true" />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? All your data will be
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
