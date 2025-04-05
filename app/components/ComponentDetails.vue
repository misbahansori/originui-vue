<script setup lang="ts">
import type { RegistryItem } from "shadcn/registry";
import { codeToHtml } from "shiki";
import { MagicString } from "vue/compiler-sfc";

const props = defineProps<{
  component: RegistryItem & { resolver: (() => Promise<unknown>) | undefined };
}>();

const html = shallowRef("");
const code = shallowRef("");

function transformImportPath(code: string) {
  const s = new MagicString(code);
  s.replaceAll(`@/registry/default`, "@/components");
  return s.toString();
}

onMounted(async () => {
  const rawCode = (await props.component.resolver?.()) as string;
  const transformedCode = transformImportPath(rawCode);

  code.value = transformedCode;
  html.value = await codeToHtml(transformedCode, {
    lang: "vue",
    theme: "github-dark",
  });
});
</script>

<template>
  <div
    class="absolute inset-x-2 top-2 flex items-center justify-between gap-2 peer-data-comp-loading:hidden"
  >
    <div class="ps-10">
      <DevOnly>
        <span class="text-muted-foreground text-sm">{{ component.name }}</span>
      </DevOnly>
    </div>
    <Dialog>
      <TooltipProvider :delayDuration="0">
        <Tooltip>
          <DialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
              >
                <Icon name="lucide:code" size="16" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
          </DialogTrigger>
          <TooltipContent class="px-2 py-1 text-xs">View code</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent class="p-5 sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle class="text-left">Installation</DialogTitle>
          <DialogDescription class="sr-only">
            Use the CLI to add components to your project
          </DialogDescription>
        </DialogHeader>
        <div class="min-w-0 space-y-5">
          <CliCommands :name="component.name" />
          <div class="space-y-2">
            <p class="text-lg font-semibold tracking-tight">Code</p>
            <div class="relative">
              <div
                class="[&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:bg-zinc-950! [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:bg-zinc-900!"
                v-html="html"
              ></div>
              <CopyButton :text="code" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
