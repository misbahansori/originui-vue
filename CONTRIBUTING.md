# Contributing to OriginUI Vue

Thank you for your interest in contributing to OriginUI Vue! This guide will walk you through the process of adding new components to the library.

## Table of Contents

- [Project Structure](#project-structure)
- [Adding a New Component](#adding-a-new-component)
  - [Regular Components](#regular-components)
  - [Extended Components](#extended-components)
- [Component Naming Convention](#component-naming-convention)
- [Registering Your Component](#registering-your-component)
- [Building the Registry](#building-the-registry)
- [Testing Your Component](#testing-your-component)
- [Submitting Your Contribution](#submitting-your-contribution)

## Project Structure

```
originui-vue/
├── app/
│   ├── config/
│   │   ├── components.ts          # Regular component categories
│   │   └── extendedComponents.ts  # Extended component categories
│   ├── pages/
│   │   ├── components/            # Regular component demo pages
│   │   └── extended/              # Extended component demo pages
│   └── registry/
│       └── default/
│           ├── components/        # Component .vue files
│           └── ui/                # Base UI components
├── public/
│   └── r/                         # Built registry JSON files
└── scripts/
    └── update-registry.ts         # Registry build script
```

## Adding a New Component

### Regular Components

Regular components follow the naming pattern `comp-XXX.vue` where XXX is a sequential number.

#### Step 1: Create the Component File

Create your component file in `app/registry/default/components/`:

```bash
app/registry/default/components/comp-XXX.vue
```

**Example component structure:**

```vue
<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Simple input</Label>
    <Input :id="id" placeholder="Email" type="email" />
  </div>
</template>
```

**Important guidelines:**
- Import UI components from `@/registry/default/ui/`
- Follow Vue 3 Composition API conventions
- Use TypeScript for type safety
- Ensure components are responsive and accessible
- Follow the existing code style and formatting

#### Step 2: Register in Component Categories

Add your component to the appropriate category in `app/config/components.ts`:

```typescript
export const categories: ComponentCategory[] = [
  {
    slug: "input",
    name: "Input",
    components: [
      { name: "comp-001" },
      { name: "comp-002" },
      { name: "comp-XXX" }, // Add your component here
    ],
  },
  // ... other categories
];
```

If you're creating a new category:

```typescript
{
  slug: "new-category",
  name: "New Category",
  components: [
    { name: "comp-XXX" },
  ],
  isNew: true, // Optional: marks category as new
},
```

### Extended Components

Extended components are custom components not included in the OriginUI library. They follow the naming pattern `extended-XX.vue`.

#### Step 1: Create the Component File

Create your component file in `app/registry/default/components/`:

```bash
app/registry/default/components/extended-XX.vue
```

#### Step 2: Register in Extended Component Categories

Add your component to the appropriate category in `app/config/extendedComponents.ts`:

```typescript
export const extendedCategories: ExtendedComponentCategory[] = [
  {
    slug: "extended/auth",
    name: "Authentication",
    components: [
      { name: "extended-01" },
      { name: "extended-XX" }, // Add your component here
    ],
  },
  // ... other categories
];
```

## Component Naming Convention

- **Regular components**: `comp-001`, `comp-002`, ..., `comp-XXX`
  - Use sequential numbering
  - Pad with zeros for consistency (001, 002, etc.)

- **Extended components**: `extended-01`, `extended-02`, ..., `extended-XX`
  - Use sequential numbering
  - Pad with zeros for consistency (01, 02, etc.)

## Building the Registry

After adding your component, you need to build the registry to generate the JSON files:

```bash
# Build the registry
pnpm registry:build
```

The build script automatically:
1. Scan all component files in `app/registry/default/components/`
- Extracts npm dependencies from imports
- Detects registry dependencies (UI components used)
- Generates proper file paths
- Creates the `public/r/[component-name].json` file

## Testing Your Component

Before submitting:

1. **Visual testing**: Run the dev server and verify your component displays correctly
   ```bash
   pnpm dev
   ```

2. **Build testing**: Ensure the production build works
   ```bash
   pnpm build
   ```

3. **Registry testing**: Verify your component appears in the registry
   - Check that `public/r/comp-XXX.json` or `public/r/extended-XX.json` was generated
   - Verify all dependencies are correctly detected

4. **Responsive testing**: Test on different screen sizes

5. **Accessibility testing**: Ensure proper keyboard navigation and screen reader support

## Code Style Guidelines

- Use Vue 3 Composition API with `<script setup lang="ts">`
- Use TypeScript for type definitions
- Follow the existing component structure
- Use Tailwind CSS for styling
- Use prettier for code formatting

## Questions or Issues?

If you have questions or run into issues:
- Check existing components for reference
- Review the [README.md](./README.md) for project setup
- Open an issue on GitHub for discussion

Thank you for contributing to OriginUI Vue!
