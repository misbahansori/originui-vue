<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";
import { LucideChevronDown } from "lucide-vue-next";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    collapsibles: [
      {
        title: "What about performance?",
        content: "We optimize every component for maximum performance and minimal bundle size.",
      },
      {
        title: "How is the documentation?",
        content:
          "Our documentation is comprehensive and includes live examples for every component.",
      },
    ],
  },
  {
    id: "2",
    title: "How can I customize the components?",
    collapsibles: [
      {
        title: "Can I use custom themes?",
        content:
          "Yes, our theming system is fully customizable and supports both light and dark modes.",
      },
      {
        title: "What about Tailwind support?",
        content: "We have first-class support for Tailwind CSS with custom utility classes.",
      },
    ],
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    collapsibles: [
      {
        title: "What's the bundle size impact?",
        content:
          "Our components are tree-shakeable and typically add minimal overhead to your bundle.",
        open: true,
      },
      {
        title: "How is code splitting handled?",
        content: "We support automatic code splitting for optimal loading performance.",
      },
    ],
  },
  {
    id: "4",
    title: "How accessible are the components?",
    collapsibles: [
      {
        title: "Which screen readers are supported?",
        content: "We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.",
      },
      {
        title: "What about keyboard navigation?",
        content:
          "Full keyboard navigation support is implemented following WAI-ARIA best practices.",
      },
    ],
  },
];
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Multi-level</h2>
    <Accordion type="single" collapsible class="w-full -space-y-px" :default-value="'3'">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
      >
        <AccordionTrigger
          class="px-4 py-3 text-[15px] leading-6 font-semibold outline-none hover:no-underline focus-visible:ring-0"
        >
          {{ item.title }}
        </AccordionTrigger>
        <AccordionContent class="p-0">
          <Collapsible
            v-for="(collapsible, index) in item.collapsibles"
            :key="index"
            class="bg-accent border-t px-4 py-3"
            :default-open="collapsible.open"
          >
            <CollapsibleTrigger
              class="flex gap-2 text-[15px] leading-6 font-semibold [&[data-state=open]>svg]:rotate-180"
            >
              <LucideChevronDown
                class="mt-1 size-4 shrink-0 opacity-60 transition-transform duration-200"
                aria-hidden="true"
              />
              {{ collapsible.title }}
            </CollapsibleTrigger>
            <CollapsibleContent
              class="text-muted-foreground data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down mt-1 overflow-hidden ps-6 text-sm transition-all"
            >
              {{ collapsible.content }}
            </CollapsibleContent>
          </Collapsible>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
