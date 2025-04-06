<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { LucideDatabase } from "lucide-vue-next";
import { ref } from "vue";

const selectedValue = ref("1");
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Databases</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <Select v-model="selectedValue">
          <SelectTrigger
            id="select-database"
            class="relative gap-2 ps-9"
            aria-label="Select database"
          >
            <div
              class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50"
            >
              <LucideDatabase class="size-4" aria-hidden="true" />
            </div>
            <SelectValue placeholder="Select database" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Orion</SelectItem>
            <SelectItem value="2">Sigma</SelectItem>
            <SelectItem value="3">Dorado</SelectItem>
          </SelectContent>
        </Select>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
