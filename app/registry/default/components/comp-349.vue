<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { LucidePlus } from "lucide-vue-next";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Table w/ plus-minus</h2>
    <Accordion
      type="single"
      collapsible
      class="w-full -space-y-px"
      :default-value="'3'"
    >
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
      >
        <AccordionHeader>
          <AccordionTrigger
            class="flex flex-1 items-center justify-between rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-0 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0"
          >
            {{ item.title }}
            <template #icon>
              <LucidePlus
                class="pointer-events-none size-4 shrink-0 opacity-60 transition-transform duration-200"
                aria-hidden="true"
              />
            </template>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="text-muted-foreground pb-2">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
