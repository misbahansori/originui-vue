<template>
  <HoverCard>
    <div class="flex items-center gap-3">
      <img
        class="shrink-0 rounded-full"
        src="/avatar-40-05.jpg"
        width="40"
        height="40"
        alt="Avatar"
      />
      <div class="space-y-0.5">
        <HoverCardTrigger as-child>
          <p>
            <a class="text-sm font-medium hover:underline" href="#">
              Keith Kennedy
            </a>
          </p>
        </HoverCardTrigger>
        <p class="text-muted-foreground text-xs">@k.kennedy</p>
      </div>
    </div>
    <HoverCardContent>
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <img
            class="shrink-0 rounded-full"
            src="/avatar-40-05.jpg"
            width="40"
            height="40"
            alt="Avatar"
          />
          <div class="space-y-0.5">
            <p class="text-sm font-medium">Keith Kennedy</p>
            <p class="text-muted-foreground text-xs">@k.kennedy</p>
          </div>
        </div>
        <p class="text-muted-foreground text-sm">
          Designer at
          <strong class="text-foreground font-medium">@Origin UI</strong>
          . Crafting web experiences with Tailwind CSS.
        </p>
        <div class="flex items-center gap-2">
          <div class="flex -space-x-1.5">
            <img
              class="ring-background rounded-full ring-1"
              src="/avatar-20-04.jpg"
              width="20"
              height="20"
              alt="Friend 01"
            />
            <img
              class="ring-background rounded-full ring-1"
              src="/avatar-20-05.jpg"
              width="20"
              height="20"
              alt="Friend 02"
            />
            <img
              class="ring-background rounded-full ring-1"
              src="/avatar-20-06.jpg"
              width="20"
              height="20"
              alt="Friend 03"
            />
          </div>
          <div class="text-muted-foreground text-xs">3 mutual friends</div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
