<template>
  <Tabs defaultValue="tab-1">
    <ScrollArea>
      <TabsList
        class="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1"
      >
        <TabsTrigger
          value="tab-1"
          class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
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
          class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:panels-top-left"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Projects
          <Badge class="bg-primary/15 ms-1.5 min-w-5 px-1" variant="secondary">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:box"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Packages
          <Badge class="ms-1.5">New</Badge>
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:users-round"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Team
        </TabsTrigger>
        <TabsTrigger
          value="tab-5"
          class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:chart-line"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Insights
        </TabsTrigger>
        <TabsTrigger
          value="tab-6"
          class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <Icon
            name="lucide:settings"
            class="-ms-0.5 me-1.5 size-4 opacity-60"
            aria-hidden="true"
          />
          Settings
        </TabsTrigger>
      </TabsList>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    <TabsContent value="tab-1">
      <p class="text-muted-foreground pt-1 text-center text-xs">
        Content for Tab 1
      </p>
    </TabsContent>
    <TabsContent value="tab-2">
      <p class="text-muted-foreground pt-1 text-center text-xs">
        Content for Tab 2
      </p>
    </TabsContent>
    <TabsContent value="tab-3">
      <p class="text-muted-foreground pt-1 text-center text-xs">
        Content for Tab 3
      </p>
    </TabsContent>
    <TabsContent value="tab-4">
      <p class="text-muted-foreground pt-1 text-center text-xs">
        Content for Tab 4
      </p>
    </TabsContent>
    <TabsContent value="tab-5">
      <p class="text-muted-foreground pt-1 text-center text-xs">
        Content for Tab 5
      </p>
    </TabsContent>
    <TabsContent value="tab-6">
      <p class="text-muted-foreground pt-1 text-center text-xs">
        Content for Tab 6
      </p>
    </TabsContent>
  </Tabs>
</template>
