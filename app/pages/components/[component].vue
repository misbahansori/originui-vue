<script setup lang="ts">
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
  <div>
    <div
      class="-m-px grid grid-cols-4 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8"
    >
      <ComponentCard :key="component.name" :component="component">
        <ComponentLoader :component="component" />

        <ComponentDetails :component="component" />
      </ComponentCard>
    </div>
  </div>
</template>
