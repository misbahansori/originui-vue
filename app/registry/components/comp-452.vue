<template>
  <Breadcrumb>
    <BreadcrumbList class="bg-background rounded-md border px-3 py-2 shadow-xs">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon name="lucide:home" class="size-4" aria-hidden="true" />
          <span class="sr-only">Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
