<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div
      class="flex w-full max-w-md flex-col gap-4 rounded-lg border p-8 shadow-md"
    >
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
          <h1
            class="text-lg leading-none font-semibold tracking-tight sm:text-center"
          >
            Thanks for signing up!
          </h1>
          <p class="text-muted-foreground text-center text-sm">
            Please verify your email address before continuing.
          </p>
        </div>
      </div>
      <form class="flex flex-col gap-4">
        <p class="text-muted-foreground text-sm/relaxed">
          We've sent a verification link to
          <a href="#" class="text-foreground font-semibold">
            example@email.com.
          </a>
          Please click the link to verify your email address.
        </p>
        <p class="text-muted-foreground text-sm/relaxed">
          Didn't receive the email? Click the button below to resend the
          verification link.
        </p>
        <div class="flex w-full items-center justify-between gap-4">
          <Button>Resend verification email</Button>
          <Button variant="link">Log out</Button>
        </div>
      </form>
    </div>
  </div>
</template>
