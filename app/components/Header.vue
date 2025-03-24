<script setup lang="ts">
// Define links array like in the React component
const links = [
  { text: "Layouts", href: "/layouts", isNew: true },
  // { text: "Colors", href: "/colors" },
  { text: "Easing Classes", href: "/easings" },
];

// Mobile detection
const isMobile = ref(false);

onMounted(() => {
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);
});

function checkIfMobile() {
  isMobile.value = window.innerWidth < 768;
}
</script>

<template>
  <header
    class="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px"
  >
    <div
      class="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
      aria-hidden="true"
    ></div>
    <div
      class="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3"
    >
      <NuxtLink class="shrink-0" to="/" aria-label="Home">
        <span class="sr-only">Origin UI</span>
        <img
          src="/logo.svg"
          alt="Origin UI logo"
          width="117"
          height="24"
          class="dark:hidden"
        />
        <img
          src="/logo-dark.svg"
          alt="Origin UI logo"
          width="117"
          height="24"
          class="hidden dark:block"
        />
      </NuxtLink>
      <div class="flex items-center">
        <template v-if="!isMobile">
          <div class="flex items-center gap-4 md:gap-10">
            <NuxtLink
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              class="text-muted-foreground hover:text-foreground/80 relative"
            >
              {{ link.text }}
              <span
                v-if="link.isNew"
                class="bg-primary text-primary-foreground absolute -top-3 -right-6 rounded-full px-1.5 py-0.5 text-[0.6rem] leading-none font-medium"
              >
                NEW
              </span>
            </NuxtLink>
          </div>
          <div
            class="bg-input ms-4 me-4 h-5 w-px md:ms-10"
            aria-hidden="true"
          ></div>
        </template>
        <div class="flex items-center gap-1">
          <a
            class="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]"
            href="https://x.com/origin_ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">X</span>
            <!-- Twitter X Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              ></path>
            </svg>
          </a>
          <a
            class="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]"
            href="https://github.com/origin-space/originui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">GitHub</span>
            <!-- GitHub Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <!-- Theme Toggle -->
          <ThemeToggle />
          <!-- Mobile Menu -->
          <DropdownMenu v-if="isMobile">
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon" class="size-9">
                <span class="sr-only">Menu</span>
                <!-- Hamburger Menu Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                v-for="link in links"
                :key="link.href"
                :to="link.href"
                as-child
              >
                <NuxtLink
                  :to="link.href"
                  class="flex w-full cursor-pointer items-center"
                >
                  {{ link.text }}
                  <span
                    v-if="link.isNew"
                    class="bg-primary text-primary-foreground ml-2 rounded-full px-1.5 py-0.5 text-[0.6rem] leading-none font-medium"
                  >
                    NEW
                  </span>
                </NuxtLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </header>
</template>
