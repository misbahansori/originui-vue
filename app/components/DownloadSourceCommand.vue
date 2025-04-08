<script setup lang="ts">
import type { RegistryItem } from "shadcn-vue/registry";
const props = defineProps<{
  component: RegistryItem;
}>();

const REPO_URL =
  "https://github.com/misbahansori/originui-vue/tree/main/app/registry/components/ui";
const DOWNLOAD_URL = "https://download-directory.github.io?url=";

const donwloadUrls = computed(() => {
  return props.component.registryDependencies
    ?.map((dependency) => {
      const componentName = dependency.split("/").pop()?.split(".")[0];

      const displayName = componentName?.replace(/-/g, " ");

      if (!componentName || !displayName) return null;

      return {
        componentName,
        displayName,
        url: `${DOWNLOAD_URL}${REPO_URL}/${componentName}&filename=${componentName}`,
      };
    })
    .filter((item) => item !== null);
});
</script>

<template>
  <div class="relative">
    <Tabs
      class="rounded-md bg-zinc-950 dark:bg-zinc-900"
      :defaultValue="donwloadUrls?.at(0)?.componentName"
    >
      <TabsList
        class="dark h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0"
      >
        <TabsTrigger
          v-for="item in donwloadUrls"
          :key="item.componentName"
          :value="item.componentName"
          class="data-[state=active]:after:bg-primary relative rounded-none py-3 capitalize after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          {{ item.displayName }}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        v-for="item in donwloadUrls"
        :key="item.componentName"
        :value="item.componentName"
        class="m-0"
      >
        <pre
          class="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100"
          dir="rtl"
          >{{ item.url }}</pre
        >
        <CopyButton :text="item.url" class="top-1" />
      </TabsContent>
    </Tabs>
  </div>
</template>
