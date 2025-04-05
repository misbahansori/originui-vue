<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Newsletter</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="mb-2 flex flex-col items-center gap-2">
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
          <DialogTitle class="sm:text-center">Never miss an update</DialogTitle>
          <DialogDescription class="sm:text-center">
            Subscribe to receive news and special offers.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="*:not-first:mt-2">
          <div class="relative">
            <Input
              id="dialog-subscribe"
              class="peer ps-9"
              placeholder="hi@yourcompany.com"
              type="email"
              aria-label="Email"
            />
            <div
              class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
            >
              <Icon name="lucide:mail" class="size-4" aria-hidden="true" />
            </div>
          </div>
        </div>
        <Button type="button" class="w-full">Subscribe</Button>
      </form>

      <p class="text-muted-foreground text-center text-xs">
        By subscribing you agree to our
        <a class="underline hover:no-underline" href="#">Privacy Policy</a>
        .
      </p>
    </DialogContent>
  </Dialog>
</template>
