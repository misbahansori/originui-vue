<script setup lang="ts">
import { LucideLoader } from "lucide-vue-next";

defineRouteRules({
  prerender: false,
});

const route = useRoute();
const componentSlug = route.params.component as string;

const component = getComponentByName(componentSlug);

if (!component) {
  throw createError({
    statusCode: 404,
    message: `Component '${componentSlug}' not found`,
  });
}
</script>
<template>
  <PageGrid>
    <ComponentCard
      :key="component.name"
      :component="component"
      isSearchPage
      class="border-none"
    >
      <Suspense>
        <template #default>
          <ComponentLoader :component="component" />
        </template>
        <template #fallback>
          <div class="flex items-center justify-center p-4">
            <LucideLoader class="mx-auto size-4 animate-spin" />
          </div>
        </template>
      </Suspense>

      <ComponentDetails :component="component" />
    </ComponentCard>
  </PageGrid>
</template>
