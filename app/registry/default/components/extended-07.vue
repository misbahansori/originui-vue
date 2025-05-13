<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucidePlus } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <svg
        class="w-full max-w-[12rem]"
        viewBox="0 0 238 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="61.8035"
          width="200"
          height="120"
          rx="16"
          transform="rotate(-18 0 61.8035)"
          fill="#EDEDEF"
        />
        <g filter="url(#filter0_d_10_153)">
          <rect x="34" y="62" width="200" height="120" rx="16" fill="white" />
        </g>
        <rect x="51" y="85" width="28" height="20" rx="4" fill="#D4D4D8" />
        <rect x="51" y="149" width="28" height="10" rx="4" fill="#D4D4D8" />
        <rect x="97" y="149" width="28" height="10" rx="4" fill="#D4D4D8" />
        <rect x="143" y="149" width="28" height="10" rx="4" fill="#D4D4D8" />
        <rect x="189" y="149" width="28" height="10" rx="4" fill="#D4D4D8" />
        <defs>
          <filter
            id="filter0_d_10_153"
            x="30"
            y="62"
            width="208"
            height="128"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.286275 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_153"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_153"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div class="flex flex-col gap-2">
        <h1 class="text-lg font-bold">You don't have any cards</h1>
        <p class="text-muted-foreground text-sm">
          Please add a new card to your account to get started.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <Button>
          <LucidePlus class="size-4" />
          <span>Add card</span>
        </Button>
      </div>
    </div>
  </div>
</template>
