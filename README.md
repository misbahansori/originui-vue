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
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.21 0.006 285.885);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.55 0.01 286);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.637 0.237 25.331);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.92 0 286);
  --input: oklch(0.871 0.006 286.286);
  --ring: oklch(0.871 0.006 286.286);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.21 0.006 285.885);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.871 0.006 286.286);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.141 0.005 285.823);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.141 0.005 285.823);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.21 0.006 285.885);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.21 0.006 285.885);
  --muted-foreground: oklch(0.65 0.01 286);
  --accent: oklch(0.21 0.006 285.885);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.274 0.006 286.033);
  --input: oklch(0.274 0.006 286.033);
  --ring: oklch(0.442 0.017 285.786);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.274 0.006 286.033);
  --sidebar-ring: oklch(0.442 0.017 285.786);
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
