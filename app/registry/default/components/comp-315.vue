<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Scrollable (native scrollbar)</Button>
    </DialogTrigger>
    <DialogContent
      class="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden"
    >
      <div class="overflow-y-auto">
        <DialogHeader class="contents space-y-0 text-left">
          <DialogTitle class="px-6 pt-6">
            Frequently Asked Questions (FAQ)
          </DialogTitle>
          <DialogDescription asChild>
            <div class="p-6">
              <div
                class="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold"
              >
                <div class="space-y-1">
                  <p>
                    <strong>Account Management</strong>
                  </p>
                  <p>
                    Navigate to the registration page, provide required
                    information, and verify your email address. You can sign up
                    using your email or through social media platforms.
                  </p>
                </div>
                <div class="space-y-1">
                  <p>
                    <strong>Password Reset Process</strong>
                  </p>
                  <p>
                    Users can reset their password through the account settings
                    page. Click "Forgot Password" and follow the email
                    verification steps to regain account access quickly and
                    securely.
                  </p>
                </div>
                <div class="space-y-1">
                  <p>
                    <strong>Service Pricing Tiers</strong>
                  </p>
                  <p>
                    We offer three primary subscription levels designed to meet
                    diverse user needs: Basic (free with limited features),
                    Professional (monthly fee with comprehensive access), and
                    Enterprise (custom pricing with full platform capabilities).
                  </p>
                </div>
                <div class="space-y-1">
                  <p>
                    <strong>Technical Support Channels</strong>
                  </p>
                  <p>
                    Customer support is accessible through multiple
                    communication methods including email support, live chat
                    during business hours, an integrated support ticket system,
                    and phone support specifically for enterprise-level
                    customers.
                  </p>
                </div>
                <div class="space-y-1">
                  <p>
                    <strong>Data Protection Strategies</strong>
                  </p>
                  <p>
                    Our platform implements rigorous security measures including
                    256-bit SSL encryption, regular comprehensive security
                    audits, strict data access controls, and compliance with
                    international privacy protection standards.
                  </p>
                </div>
                <div class="space-y-1">
                  <p>
                    <strong>Platform Compatibility</strong>
                  </p>
                  <p>
                    The service supports multiple device and operating system
                    environments, including web browsers like Chrome and
                    Firefox, mobile applications for iOS and Android, and
                    desktop applications compatible with Windows and macOS.
                  </p>
                </div>
                <div class="space-y-1">
                  <p>
                    <strong>Subscription Management</strong>
                  </p>
                  <p>
                    Users can manage their subscription preferences through the
                    account dashboard. Options include upgrading or downgrading
                    plans, updating payment methods, and viewing billing
                    history. Changes take effect at the start of the next
                    billing cycle.
                  </p>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter class="px-6 pb-6 sm:justify-start">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">Okay</Button>
          </DialogClose>
        </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
</template>
