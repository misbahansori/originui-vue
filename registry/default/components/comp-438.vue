<template>
  <Tabs defaultValue="tab-1" class="items-center">
    <TabsList class="h-auto rounded-none border-b bg-transparent p-0">
      <TabsTrigger
        value="tab-1"
        class="data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
      >
        <Icon
          name="lucide:home"
          class="mb-1.5 size-4 opacity-60"
          aria-hidden="true"
        />
        Overview
      </TabsTrigger>
      <TabsTrigger
        value="tab-2"
        class="data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
      >
        <Icon
          name="lucide:panels-top-left"
          class="mb-1.5 size-4 opacity-60"
          aria-hidden="true"
        />
        Projects
      </TabsTrigger>
      <TabsTrigger
        value="tab-3"
        class="data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
      >
        <Icon
          name="lucide:box"
          class="mb-1.5 size-4 opacity-60"
          aria-hidden="true"
        />
        Packages
      </TabsTrigger>
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
