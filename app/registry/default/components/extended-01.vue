<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
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
            Welcome back
          </h1>
          <p class="text-muted-foreground text-sm">
            Enter your credentials to login to your account.
          </p>
        </div>
      </div>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="hi@yourcompany.com"
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
        <div class="flex justify-between gap-2">
          <div class="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label for="remember" class="font-normal">Remember me</Label>
          </div>
          <a
            class="text-sm font-medium hover:underline"
            href="/forgot-password"
          >
            Forgot password?
          </a>
        </div>
        <Button type="submit" class="w-full">Sign in</Button>
        <p class="text-muted-foreground text-sm">
          Don't have an account?
          <a href="/register" class="text-primary font-medium hover:underline">
            Register
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
