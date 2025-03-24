<script setup lang="ts">
import { computed, ref } from "vue";
import { cn } from "~/utils/utils";

// Define form state types
type FormStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  email: string;
  status: FormStatus;
  message: string;
}

// Initial form state
const formState = ref<FormState>({
  email: "",
  status: "idle",
  message: "",
});

const isLoading = computed(() => formState.value.status === "loading");

// Generate unique IDs for SVG filters
const illustrationId1 = `illustration-${Math.random().toString(36).substring(2, 9)}`;
const illustrationId2 = `illustration-${Math.random().toString(36).substring(2, 9)}`;

// Handle form submission
const handleSubmit = async (e: Event) => {
  e.preventDefault();
  formState.value = { ...formState.value, status: "loading", message: "" };

  try {
    // Simulate API call (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const success = Math.random() > 0.3; // Simulate success/failure

    if (!success) {
      formState.value = {
        ...formState.value,
        status: "error",
        message: "Failed to subscribe. Please try again.",
      };
    } else {
      formState.value = {
        email: "",
        status: "success",
        message: "Thanks for subscribing!",
      };
    }
  } catch (error) {
    formState.value = {
      ...formState.value,
      status: "error",
      message: error instanceof Error ? error.message : "Failed to subscribe",
    };
  }
};
</script>

<template>
  <div
    class="dark relative overflow-hidden rounded-xl bg-zinc-900 px-4 py-14 sm:px-8"
  >
    <!-- Background illustrations -->
    <svg
      class="absolute top-0 left-0 -translate-x-1/2"
      xmlns="http://www.w3.org/2000/svg"
      width="267"
      height="268"
      fill="none"
      aria-hidden="true"
    >
      <g
        :filter="`url(#${illustrationId1}a)`"
        style="mix-blend-mode: plus-lighter"
      >
        <path
          fill="#fff"
          fill-opacity=".48"
          d="M189 76.284 242.642 24 189 83.753v19.691l-8.148-6.11L24 244 176.099 89.864v-13.58H189Z"
        />
      </g>
      <defs>
        <filter
          :id="`${illustrationId1}a`"
          width="266.642"
          height="268"
          x="0"
          y="0"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_809_24"
            stdDeviation="12"
          />
        </filter>
      </defs>
    </svg>

    <svg
      class="absolute right-0 bottom-0 translate-x-1/4"
      xmlns="http://www.w3.org/2000/svg"
      width="267"
      height="268"
      fill="none"
      aria-hidden="true"
    >
      <g
        :filter="`url(#${illustrationId2}a)`"
        style="mix-blend-mode: plus-lighter"
      >
        <path
          fill="#fff"
          fill-opacity=".48"
          d="M189 76.284 242.642 24 189 83.753v19.691l-8.148-6.11L24 244 176.099 89.864v-13.58H189Z"
        />
      </g>
      <defs>
        <filter
          :id="`${illustrationId2}a`"
          width="266.642"
          height="268"
          x="0"
          y="0"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_809_24"
            stdDeviation="12"
          />
        </filter>
      </defs>
    </svg>

    <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
      <h2
        class="font-heading text-foreground text-2xl/[1.1] font-bold tracking-tight md:text-3xl/[1.1]"
      >
        Get notified when new stuff drops.
      </h2>

      <!-- Subscribe form -->
      <form @submit="handleSubmit" class="space-y-4">
        <div class="space-y-2">
          <div class="inline-flex gap-2">
            <div class="relative">
              <div
                class="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
              >
                <Icon
                  name="ri:navigation-line"
                  class="-scale-x-100"
                  :size="16"
                  aria-hidden="true"
                />
              </div>
              <Input
                class="h-10 flex-1 rounded-full border-zinc-600/65 bg-zinc-700/30 ps-9 text-zinc-100 placeholder:text-zinc-500 md:min-w-64 [&:-webkit-autofill]:bg-zinc-700/30 [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000000s_ease-in-out_0s]"
                placeholder="Enter your email..."
                type="email"
                v-model="formState.email"
                :disabled="isLoading"
                aria-label="Subscribe to the newsletter"
                required
              />
            </div>
            <Button
              type="submit"
              class="group relative h-10 rounded-full"
              :disabled="isLoading"
              :data-loading="isLoading"
            >
              <span :class="{ 'text-transparent': isLoading }">Subscribe</span>
              <div
                v-if="isLoading"
                class="absolute inset-0 flex items-center justify-center"
              >
                <Icon
                  name="ri:loader-3-line"
                  class="animate-spin"
                  :size="16"
                  aria-hidden="true"
                />
              </div>
            </Button>
          </div>
          <p
            v-if="formState.message"
            :class="
              cn(
                'absolute mt-2 text-xs',
                formState.status === 'error'
                  ? 'text-destructive'
                  : 'text-muted-foreground',
              )
            "
            role="alert"
            aria-live="polite"
          >
            {{ formState.message }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
