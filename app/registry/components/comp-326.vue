<script setup lang="ts">
const id = useId();
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Sign in</Button>
    </DialogTrigger>
    <DialogContent>
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
        <DialogHeader>
          <DialogTitle class="sm:text-center">Welcome back</DialogTitle>
          <DialogDescription class="sm:text-center">
            Enter your credentials to login to your account.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <div class="*:not-first:mt-2">
            <Label :for="`${id}-email`">Email</Label>
            <Input
              :id="`${id}-email`"
              placeholder="hi@yourcompany.com"
              type="email"
              required
            />
          </div>
          <div class="*:not-first:mt-2">
            <Label :for="`${id}-password`">Password</Label>
            <Input
              :id="`${id}-password`"
              placeholder="Enter your password"
              type="password"
              required
            />
          </div>
        </div>
        <div class="flex justify-between gap-2">
          <div class="flex items-center gap-2">
            <Checkbox :id="`${id}-remember`" />
            <Label
              :for="`${id}-remember`"
              class="text-muted-foreground font-normal"
            >
              Remember me
            </Label>
          </div>
          <a class="text-sm underline hover:no-underline" href="#">
            Forgot password?
          </a>
        </div>
        <Button type="button" class="w-full">Sign in</Button>
      </form>

      <div
        class="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1"
      >
        <span class="text-muted-foreground text-xs">Or</span>
      </div>

      <Button variant="outline">Login with Google</Button>
    </DialogContent>
  </Dialog>
</template>
