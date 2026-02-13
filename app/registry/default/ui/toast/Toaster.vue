<script setup lang="ts">
import { isVNode } from "vue";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from ".";
import { useToast } from "./use-toast";

const { toasts } = useToast();
</script>

<template>
  <ToastProvider>
    <Toast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <div class="flex w-full justify-between gap-2">
        <div class="flex flex-col gap-3">
          <div class="space-y-1">
            <ToastTitle v-if="toast.title">
              {{ toast.title }}
            </ToastTitle>
            <template v-if="toast.description">
              <ToastDescription v-if="isVNode(toast.description)">
                <component :is="toast.description" />
              </ToastDescription>
              <ToastDescription v-else>
                {{ toast.description }}
              </ToastDescription>
            </template>
          </div>
          <div>
            <component :is="toast.action" />
          </div>
        </div>
        <div>
          <ToastClose />
        </div>
      </div>
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
