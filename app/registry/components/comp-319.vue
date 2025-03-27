<script setup lang="ts">
import { ref } from "vue";

const hasReadToBottom = ref(false);
const contentRef = ref<HTMLDivElement | null>(null);

const handleScroll = () => {
  const content = contentRef.value;
  if (!content) return;

  const scrollPercentage =
    content.scrollTop / (content.scrollHeight - content.clientHeight);
  if (scrollPercentage >= 0.99 && !hasReadToBottom.value) {
    hasReadToBottom.value = true;
  }
};
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Terms & Conditions</Button>
    </DialogTrigger>
    <DialogContent
      class="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5"
    >
      <DialogHeader class="contents space-y-0 text-left">
        <DialogTitle class="border-b px-6 py-4 text-base">
          Terms & Conditions
        </DialogTitle>
        <div ref="contentRef" @scroll="handleScroll" class="overflow-y-auto">
          <DialogDescription asChild>
            <div class="px-6 py-4">
              <div
                class="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold"
              >
                <div class="space-y-4">
                  <div class="space-y-1">
                    <p>
                      <strong>Acceptance of Terms</strong>
                    </p>
                    <p>
                      By accessing and using this website, users agree to comply
                      with and be bound by these Terms of Service. Users who do
                      not agree with these terms should discontinue use of the
                      website immediately.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>User Account Responsibilities</strong>
                    </p>
                    <p>
                      Users are responsible for maintaining the confidentiality
                      of their account credentials. Any activities occurring
                      under a user's account are the sole responsibility of the
                      account holder. Users must notify the website
                      administrators immediately of any unauthorized account
                      access.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>Content Usage and Restrictions</strong>
                    </p>
                    <p>
                      The website and its original content are protected by
                      intellectual property laws. Users may not reproduce,
                      distribute, modify, create derivative works, or
                      commercially exploit any content without explicit written
                      permission from the website owners.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>Limitation of Liability</strong>
                    </p>
                    <p>
                      The website provides content "as is" without any
                      warranties. The website owners shall not be liable for
                      direct, indirect, incidental, consequential, or punitive
                      damages arising from user interactions with the platform.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>Modification of Terms</strong>
                    </p>
                    <p>
                      The website owners reserve the right to modify these terms
                      at any time. Users will be notified of any changes, and
                      continued use of the website after modifications
                      constitutes acceptance of the updated terms.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>Termination of Service</strong>
                    </p>
                    <p>
                      The website owners reserve the right to terminate or
                      suspend access to the service immediately, without prior
                      notice, for any breach of these Terms of Service.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>Governing Law</strong>
                    </p>
                    <p>
                      These terms shall be governed by and construed in
                      accordance with the laws of the jurisdiction in which the
                      website operates, without regard to its conflict of law
                      provisions.
                    </p>
                  </div>

                  <div class="space-y-1">
                    <p>
                      <strong>Contact Information</strong>
                    </p>
                    <p>
                      For any questions regarding these Terms of Service, please
                      contact us through the provided channels on our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </div>
      </DialogHeader>
      <DialogFooter class="bg-background sticky bottom-0 border-t px-6 py-4">
        <DialogClose asChild>
          <Button :disabled="!hasReadToBottom">Accept</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
