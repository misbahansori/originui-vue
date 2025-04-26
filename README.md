# OriginUI Vue

**Beautiful UI components built with Tailwind CSS and Vue.**

OriginUI Vue is an extensive collection of copy-and-paste components for quickly building app UIs. It includes hundreds of components and is constantly updated with new designs.

> **Note:** This is the Vue version fork of OriginUI. This project is unaffiliated with the original. I appreciate their work and have developed these Vue components based on their design.

## Getting Started

OriginUI Vue is designed to integrate seamlessly with Nuxt projects, but the components are also compatible with any Vue-based project. The components follow shadcn conventions, so they'll feel familiar to anyone who has used shadcn before.

**1\. Set up the required files:**

- Copy all `.vue` files from the `components/ui` folder to your project's components directory.
- Copy utility files from the `lib` folder to your project's lib directory.

Note: If you're using shadcn-vue, you may already have some of these files - however, I recommend using our components for a consistent styling experience.

**2\. Add the following CSS variables to your stylesheet (you don't need to overwrite them if you already have them):**

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0); /* --color-white */
  --foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --card: oklch(1 0 0); /* --color-white */
  --card-foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --popover: oklch(1 0 0); /* --color-white */
  --popover-foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --primary: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --primary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --secondary: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
  --secondary-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --muted: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
  --muted-foreground: oklch(0.552 0.016 285.938); /* --color-zinc-500 */
  --accent: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
  --accent-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --destructive: oklch(0.637 0.237 25.331); /* --color-red-500 */
  --destructive-foreground: oklch(0.637 0.237 25.331); /* --color-red-500 */
  --border: oklch(0.92 0.004 286.32); /* --color-zinc-200 */
  --input: oklch(0.871 0.006 286.286); /* --color-zinc-300 */
  --ring: oklch(0.871 0.006 286.286); /* --color-zinc-300 */
  --chart-1: oklch(0.646 0.222 41.116); /* --color-orange-600 */
  --chart-2: oklch(0.6 0.118 184.704); /* --color-teal-600 */
  --chart-3: oklch(0.398 0.07 227.392); /* --color-cyan-900 */
  --chart-4: oklch(0.828 0.189 84.429); /* --color-amber-400 */
  --chart-5: oklch(0.769 0.188 70.08); /* --color-amber-500 */
  --sidebar: oklch(0.985 0 0); /* --color-zinc-50 */
  --sidebar-foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --sidebar-primary: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --sidebar-primary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --sidebar-accent: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --sidebar-border: oklch(0.92 0.004 286.32); /* --color-zinc-200 */
  --sidebar-ring: oklch(0.871 0.006 286.286); /* --color-zinc-300 */
}

.dark {
  --background: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --card: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --card-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --popover: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
  --popover-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --primary: oklch(0.985 0 0); /* --color-zinc-50 */
  --primary-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --secondary: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
  --secondary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --muted: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --muted-foreground: oklch(0.65 0.01 286); /* 🔥 near --color-zinc-400 */
  --accent: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
  --accent-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --destructive: oklch(0.396 0.141 25.723); /* --color-red-900 */
  --destructive-foreground: oklch(0.637 0.237 25.331); /* --color-red-500 */
  --border: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
  --input: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
  --ring: oklch(0.442 0.017 285.786); /* --color-zinc-600 */
  --chart-1: oklch(0.488 0.243 264.376); /* --color-blue-700 */
  --chart-2: oklch(0.696 0.17 162.48); /* --color-emerald-500 */
  --chart-3: oklch(0.769 0.188 70.08); /* --color-amber-500 */
  --chart-4: oklch(0.627 0.265 303.9); /* --color-purple-500 */
  --chart-5: oklch(0.645 0.246 16.439); /* --color-rose-500 */
  --sidebar: oklch(0.205 0 0); /* --color-neutral-900 */
  --sidebar-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --sidebar-primary: oklch(0.488 0.243 264.376); /* --color-blue-700 */
  --sidebar-primary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --sidebar-accent: oklch(0.269 0 0); /* --color-neutral-800 */
  --sidebar-accent-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
  --sidebar-border: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
  --sidebar-ring: oklch(0.442 0.017 285.786); /* --color-zinc-600 */
}
```

After completing these steps, you can copy and use the components in your project. Some components may require additional libraries, which will be noted in their documentation.

## Development

If you want to run this project locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Tailwind v4 support

Our UI library fully supports Tailwind CSS v4. Components are built with the latest Tailwind features in mind.

## Features

- [Nuxt v3 with compatibility for v4](https://nuxt.com/) - The intuitive Vue framework
- [Tailwind CSS v4](https://tailwindcss.com/) - A utility-first CSS framework
- [Reka UI](https://reka-ui.com/) - Unstyled, accessible components for building high-quality design systems
- [shadcn-vue](https://www.shadcn-vue.com/) - Re-usable components built with Reka UI and Tailwind CSS

## Contributing

We welcome contributions to OriginUI Vue! Please feel free to submit issues and pull requests.

## License

Licensed under the MIT License.
