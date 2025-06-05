<script setup lang="ts">
import { ChevronsUpDown } from "lucide-vue-next";
import { ref } from "vue";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

interface Props {
  teams: readonly string[];
  defaultTeam: string;
}

const props = defineProps<Props>();
const selectedProject = ref(props.defaultTeam);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="p-0 hover:bg-transparent">
        <span
          class="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full"
        >
          {{ selectedProject.charAt(0).toUpperCase() }}
        </span>
        <div class="flex flex-col gap-0.5 leading-none">
          <span>{{ selectedProject }}</span>
        </div>
        <ChevronsUpDown :size="14" class="text-muted-foreground/80" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem
        v-for="project in teams"
        :key="project"
        @select="selectedProject = project"
      >
        {{ project }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
