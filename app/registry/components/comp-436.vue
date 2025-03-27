<template>
  <Tabs defaultValue="tab-1">
    <ScrollArea>
      <TabsList
        class="before:bg-border relative mb-3 h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px"
      >
        <TabsTrigger
          value="tab-1"
          class="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:home"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          class="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:panels-top-left"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          class="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:box"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Packages
        </TabsTrigger>
      </TabsList>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    <TabsContent value="tab-1">
      <p class="text-muted-foreground p-4 pt-1 text-center text-xs">
        Content for Tab 1
      </p>
    </TabsContent>
    <TabsContent value="tab-2">
      <p class="text-muted-foreground p-4 pt-1 text-center text-xs">
        Content for Tab 2
      </p>
    </TabsContent>
    <TabsContent value="tab-3">
      <p class="text-muted-foreground p-4 pt-1 text-center text-xs">
        Content for Tab 3
      </p>
    </TabsContent>
  </Tabs>
</template>
