<template>
  <footer class="border-t py-8">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-4">
      <div>
        <h3 class="text-lg font-semibold">Origin UI</h3>
        <p class="text-muted-foreground mt-2 text-sm">
          Beautiful UI components built with Tailwind CSS and
          <span class="text-[#41B883]">Vue</span>
        </p>
      </div>

      <div>
        <h4 class="font-medium">Resources</h4>
        <ul class="mt-3 space-y-2">
          <li>
            <NuxtLink
              to="/docs"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Documentation
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/components"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Components
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/examples"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Examples
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-medium">Community</h4>
        <ul class="mt-3 space-y-2">
          <li>
            <a
              href="https://github.com/originui/originui"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/originui"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/originui"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-medium">Legal</h4>
        <ul class="mt-3 space-y-2">
          <li>
            <NuxtLink
              to="/privacy"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Privacy
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/terms"
              class="text-muted-foreground hover:text-foreground text-sm"
            >
              Terms
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-muted-foreground mt-12 border-t pt-6 text-center text-sm">
      <p>© {{ new Date().getFullYear() }} Origin UI. All rights reserved.</p>
    </div>
  </footer>
</template>
