<template>
  <Tabs defaultValue="tab-1">
    <ScrollArea>
      <TabsList class="mb-3 gap-1 bg-transparent">
        <TabsTrigger
          value="tab-1"
          class="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
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
          class="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
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
          class="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
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
