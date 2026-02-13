<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { LucideAtSign, LucideCommand, LucideEclipse, LucideZap } from "lucide-vue-next";

const items = [
  {
    id: "1",
    icon: LucideCommand,
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    icon: LucideEclipse,
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    icon: LucideZap,
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    icon: LucideAtSign,
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">W/ icon and chevron</h2>
    <Accordion type="single" collapsible class="w-full" :default-value="'3'">
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id" class="py-2">
        <AccordionTrigger
          class="items-center py-2 text-left text-[15px] leading-6 font-semibold hover:no-underline"
        >
          <span class="flex items-center gap-3">
            <component :is="item.icon" class="size-4 shrink-0 opacity-60" aria-hidden="true" />
            <span>{{ item.title }}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="text-muted-foreground ps-7 pb-2">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
