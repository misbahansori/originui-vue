<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex w-full max-w-md flex-col gap-4 rounded-lg border p-8 shadow-md">
      <div class="flex flex-col items-center gap-2 pb-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <svg
            class="stroke-zinc-800 dark:stroke-zinc-100"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="12" fill="none" stroke-width="8" />
          </svg>
        </div>
        <div class="flex flex-col gap-y-1.5 text-center sm:text-left">
          <h1 class="text-lg leading-none font-semibold tracking-tight sm:text-center">
            Forgot your password?
          </h1>
          <p class="text-muted-foreground text-center text-sm">
            Enter your email to reset your password.
          </p>
        </div>
      </div>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Label for="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" required />
        </div>
        <Button type="submit" class="w-full">Send reset link</Button>
        <p class="text-muted-foreground text-sm">
          Remember your password?
          <a href="/login" class="text-primary font-medium hover:underline">Login</a>
        </p>
      </form>
    </div>
  </div>
</template>
