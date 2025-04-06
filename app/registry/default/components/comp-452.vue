<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { LucideHome } from "lucide-vue-next";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList class="bg-background rounded-md border px-3 py-2 shadow-xs">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <LucideHome class="size-4" aria-hidden="true" />
          <span class="sr-only">Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
