<script setup lang="ts">
import { ref } from "vue";

const PROJECT_NAME = "Origin UI";
const inputValue = ref("");
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Delete project</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col items-center gap-2">
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <Icon
            name="lucide:circle-alert"
            class="size-4 opacity-80"
            aria-hidden="true"
          />
        </div>
        <DialogHeader>
          <DialogTitle class="sm:text-center">Final confirmation</DialogTitle>
          <DialogDescription class="sm:text-center">
            This action cannot be undone. To confirm, please enter the project
            name
            <span class="text-foreground">Origin UI</span>
            .
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="*:not-first:mt-2">
          <Label for="project-name">Project name</Label>
          <Input
            id="project-name"
            type="text"
            placeholder="Type Origin UI to confirm"
            v-model="inputValue"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" class="flex-1">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            class="flex-1"
            :disabled="inputValue !== PROJECT_NAME"
          >
            Delete
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
