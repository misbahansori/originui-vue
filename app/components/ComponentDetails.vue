<script setup lang="ts">
import { codeToHtml } from "shiki";

const props = defineProps<{
  component: RegistryItem & { resolver: (() => Promise<unknown>) | undefined };
}>();

const html = shallowRef("");

const code = (await props.component.resolver?.()) as string;
html.value = await codeToHtml(code ?? "", {
  lang: "vue",
  theme: "github-dark",
});
</script>

<template>
  <div class="absolute top-2 right-2 flex gap-2 peer-data-comp-loading:hidden">
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
              >
                <Icon name="lucide:code" size="16" aria-hidden="true" />
              </Button>
            </DialogTrigger>
          </span>
        </TooltipTrigger>
        <TooltipContent class="text-muted-foreground px-2 py-1 text-xs">
          View code
        </TooltipContent>
      </Tooltip>
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle class="text-left">Code</DialogTitle>
        </DialogHeader>
        <div
          v-html="html"
          class="[&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:bg-zinc-950! [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:bg-zinc-900!"
        ></div>
      </DialogContent>
    </Dialog>
  </div>
</template>
