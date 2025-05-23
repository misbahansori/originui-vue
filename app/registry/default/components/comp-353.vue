<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";
import {
  LucideAtSign,
  LucideChevronDown,
  LucideCircleDashed,
  LucideCommand,
  LucideEclipse,
  LucideGauge,
  LucideZap,
} from "lucide-vue-next";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    icon: LucideCommand,
    collapsibles: [
      {
        title: "What about performance?",
        content:
          "We optimize every component for maximum performance and minimal bundle size.",
        icon: LucideGauge,
      },
      {
        title: "How is the documentation?",
        content:
          "Our documentation is comprehensive and includes live examples for every component.",
        icon: LucideCircleDashed,
      },
    ],
  },
  {
    id: "2",
    title: "How can I customize the components?",
    icon: LucideEclipse,
    collapsibles: [
      {
        title: "Can I use custom themes?",
        content:
          "Yes, our theming system is fully customizable and supports both light and dark modes.",
        icon: LucideGauge,
      },
      {
        title: "What about Tailwind support?",
        content:
          "We have first-class support for Tailwind CSS with custom utility classes.",
        icon: LucideCircleDashed,
      },
    ],
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    icon: LucideZap,
    collapsibles: [
      {
        title: "What's the bundle size impact?",
        content:
          "Our components are tree-shakeable and typically add minimal overhead to your bundle.",
        open: true,
        icon: LucideGauge,
      },
      {
        title: "How is code splitting handled?",
        content:
          "We support automatic code splitting for optimal loading performance.",
        icon: LucideCircleDashed,
      },
    ],
  },
  {
    id: "4",
    title: "How accessible are the components?",
    icon: LucideAtSign,
    collapsibles: [
      {
        title: "Which screen readers are supported?",
        content:
          "We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.",
        icon: LucideGauge,
      },
      {
        title: "What about keyboard navigation?",
        content:
          "Full keyboard navigation support is implemented following WAI-ARIA best practices.",
        icon: LucideCircleDashed,
      },
    ],
  },
];
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Multi-level w/ icon</h2>
    <Accordion type="single" collapsible class="w-full" :default-value="'3'">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="has-focus-visible:border-ring has-focus-visible:ring-ring/50 outline-none has-focus-visible:ring-[3px]"
      >
        <AccordionHeader>
          <AccordionTrigger
            class="justify-start gap-3 rounded-md text-[15px] leading-6 outline-none hover:no-underline focus-visible:ring-0 [&>svg]:-order-1"
          >
            <span class="flex items-center gap-3">
              <component
                :is="item.icon"
                class="size-4 shrink-0 opacity-60"
                aria-hidden="true"
              />
              <span>{{ item.title }}</span>
            </span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="p-0">
          <Collapsible
            v-for="(collapsible, index) in item.collapsibles"
            :key="index"
            class="border-t py-3 ps-6 pe-4"
            :default-open="collapsible.open"
          >
            <CollapsibleTrigger
              class="flex gap-2 text-[15px] leading-6 font-semibold [&[data-state=open]>svg]:rotate-180"
            >
              <LucideChevronDown
                class="mt-1 size-4 shrink-0 opacity-60 transition-transform duration-200"
                aria-hidden="true"
              />
              <span class="flex items-center gap-3">
                <component
                  :is="collapsible.icon"
                  class="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span>{{ collapsible.title }}</span>
              </span>
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
