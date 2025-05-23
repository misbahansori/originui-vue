<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import {
  LucideBell,
  LucideLifeBuoy,
  LucideLink2,
  LucidePlus,
  LucideShieldCheck,
} from "lucide-vue-next";

const items = [
  {
    id: "1",
    icon: LucideLink2,
    title: "Connected accounts",
    sub: "Manage your linked social and work accounts",
    content:
      "Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.",
  },
  {
    id: "2",
    icon: LucideBell,
    title: "Notifications",
    sub: "Customize your notification preferences",
    content:
      "Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.",
  },
  {
    id: "3",
    icon: LucideShieldCheck,
    title: "2-step verification",
    sub: "Add an extra layer of security to your account",
    content:
      "Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    icon: LucideLifeBuoy,
    title: "Contact support",
    sub: "We're here to help 24/7",
    content:
      "Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.",
  },
];
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">W/ icon, sub-header, and plus-minus</h2>
    <Accordion type="single" collapsible class="w-full" :default-value="'3'">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="py-2"
      >
        <AccordionHeader>
          <AccordionTrigger
            class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0"
          >
            <span class="flex items-center gap-3">
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <component
                  :is="item.icon"
                  class="size-4 opacity-60"
                  aria-hidden="true"
                />
              </span>
              <span class="flex flex-col space-y-1">
                <span>{{ item.title }}</span>
                <span v-if="item.sub" class="text-sm font-normal">
                  {{ item.sub }}
                </span>
              </span>
            </span>
            <template #icon>
              <LucidePlus
                class="pointer-events-none size-4 shrink-0 opacity-60 transition-transform duration-200"
                aria-hidden="true"
              />
            </template>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="text-muted-foreground ms-3 ps-10 pb-2">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
