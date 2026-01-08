<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const packageManager = ref<PackageManager>("pnpm");

const runtimeConfig = useRuntimeConfig();
const siteUrl = runtimeConfig.public.SITE_URL ?? "https://originui-vue.com";

const commands = {
  pnpm: `pnpm dlx shadcn-vue@latest add ${siteUrl}/r/${props.name}.json`,
  npm: `npx shadcn-vue@latest add ${siteUrl}/r/${props.name}.json`,
  yarn: `npx shadcn-vue@latest add ${siteUrl}/r/${props.name}.json`,
  bun: `bunx --bun shadcn-vue@latest add ${siteUrl}/r/${props.name}.json`,
};
</script>

<template>
  <div class="relative">
    <Tabs
      v-model="packageManager"
      class="rounded-md bg-zinc-950 dark:bg-zinc-900"
    >
      <TabsList
        class="dark h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0"
      >
        <TabsTrigger
          v-for="pkg in ['pnpm', 'npm', 'yarn', 'bun']"
          :key="pkg"
          :value="pkg"
          class="data-[state=active]:after:bg-primary relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          {{ pkg }}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        v-for="(command, pkg) in commands"
        :key="pkg"
        :value="pkg"
        class="m-0"
      >
        <pre class="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100">{{
          command
        }}</pre>
      </TabsContent>
    </Tabs>
    <CopyButton
      :text="commands[packageManager as keyof typeof commands]"
      class="top-1"
    />
  </div>
</template>
