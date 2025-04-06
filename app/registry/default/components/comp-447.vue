<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideFolders } from "lucide-vue-next";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger class="hover:text-foreground">
            <span
              role="presentation"
              aria-hidden="true"
              class="flex size-5 items-center justify-center"
            >
              <LucideFolders class="size-4" />
            </span>
            <span class="sr-only">Toggle menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem asChild>
              <a href="#">Documentation</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#">Themes</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#">GitHub</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
