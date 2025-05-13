<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { RiGithubFill, RiGoogleFill } from "@remixicon/vue";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div
      class="flex w-full max-w-md flex-col gap-4 rounded-lg border p-8 shadow-md"
    >
      <div class="flex flex-col items-center gap-2">
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
            Create an account
          </h1>
          <p class="text-muted-foreground text-sm">
            We just need a few details to get you started.
          </p>
        </div>
      </div>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="passwordConfirmation">Password Confirmation</Label>
          <Input
            id="passwordConfirmation"
            placeholder="Confirm your password"
            type="password"
            required
          />
        </div>
        <Button type="submit" class="w-full">Create account</Button>
        <p class="text-muted-foreground text-sm">
          Already have an account?
          <a href="/login" class="text-primary font-medium hover:underline">
            Login
          </a>
        </p>
      </form>
      <div
        class="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1"
      >
        <span class="text-muted-foreground text-xs">Or</span>
      </div>
      <Button variant="outline">
        <RiGoogleFill class="me-1" size="16" aria-hidden="true" />
        Login with Google
      </Button>
      <Button variant="outline">
        <RiGithubFill class="me-1" size="16" aria-hidden="true" />
        Login with GitHub
      </Button>
    </div>
  </div>
</template>
