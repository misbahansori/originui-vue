<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { LucideBox, LucideHome, LucidePanelsTopLeft } from "lucide-vue-next";
</script>

<template>
  <Tabs defaultValue="tab-1" class="items-center">
    <TabsList>
      <TooltipProvider :delay-duration="0">
        <Tooltip>
          <TooltipTrigger as-child>
            <span>
              <TabsTrigger value="tab-1" class="py-3">
                <LucideHome class="size-4" aria-hidden="true" />
              </TabsTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent class="px-2 py-1 text-xs">Overview</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider :delay-duration="0">
        <Tooltip>
          <TooltipTrigger as-child>
            <span>
              <TabsTrigger value="tab-2" class="group py-3">
                <span class="relative">
                  <LucidePanelsTopLeft class="size-4" aria-hidden="true" />
                  <Badge
                    class="border-background absolute -top-2.5 left-full min-w-4 -translate-x-1.5 px-0.5 text-[10px]/[.875rem] transition-opacity group-data-[state=inactive]:opacity-50"
                  >
                    3
                  </Badge>
                </span>
              </TabsTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent class="px-2 py-1 text-xs">Projects</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider :delay-duration="0">
        <Tooltip>
          <TooltipTrigger as-child>
            <span>
              <TabsTrigger value="tab-3" class="py-3">
                <LucideBox class="size-4" aria-hidden="true" />
              </TabsTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent class="px-2 py-1 text-xs">Packages</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </TabsList>
    <TabsContent value="tab-1">
      <p class="text-muted-foreground p-4 text-center text-xs">
        Content for Tab 1
      </p>
    </TabsContent>
    <TabsContent value="tab-2">
      <p class="text-muted-foreground p-4 text-center text-xs">
        Content for Tab 2
      </p>
    </TabsContent>
    <TabsContent value="tab-3">
      <p class="text-muted-foreground p-4 text-center text-xs">
        Content for Tab 3
      </p>
    </TabsContent>
  </Tabs>
</template>
