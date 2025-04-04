<script setup lang="ts">
const items = [
  {
    feature: "scroll-timeline",
    desktop: [
      { name: "Chrome", supported: true, version: "115" },
      { name: "Edge", supported: true, version: "115" },
      { name: "Firefox", supported: false, version: "111" },
      { name: "Opera", supported: true, version: "101" },
      { name: "Safari", supported: false, version: "No" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "115" },
      { name: "Firefox Android", supported: false, version: "No" },
      { name: "Opera Android", supported: true, version: "77" },
      { name: "Safari iOS", supported: false, version: "No" },
      { name: "Samsung Internet", supported: true, version: "23" },
    ],
  },
  {
    feature: "view-timeline",
    desktop: [
      { name: "Chrome", supported: true, version: "115" },
      { name: "Edge", supported: true, version: "115" },
      { name: "Firefox", supported: false, version: "114" },
      { name: "Opera", supported: true, version: "101" },
      { name: "Safari", supported: false, version: "No" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "115" },
      { name: "Firefox Android", supported: false, version: "No" },
      { name: "Opera Android", supported: true, version: "77" },
      { name: "Safari iOS", supported: false, version: "No" },
      { name: "Samsung Internet", supported: true, version: "23" },
    ],
  },
  {
    feature: "font-size-adjust",
    desktop: [
      { name: "Chrome", supported: true, version: "127" },
      { name: "Edge", supported: true, version: "127" },
      { name: "Firefox", supported: false, version: "3" },
      { name: "Opera", supported: true, version: "113" },
      { name: "Safari", supported: true, version: "16.4" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "127" },
      { name: "Firefox Android", supported: true, version: "4" },
      { name: "Opera Android", supported: true, version: "84" },
      { name: "Safari iOS", supported: true, version: "16.4" },
      { name: "Samsung Internet", supported: false, version: "No" },
    ],
  },
];
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow
        class="*:border-border border-y-0 hover:bg-transparent [&>:not(:last-child)]:border-r"
      >
        <TableCell></TableCell>
        <TableHead class="border-b text-center" :colspan="5">
          <Icon
            name="lucide:monitor"
            class="inline-flex size-4"
            aria-hidden="true"
          />
          <span class="sr-only">Desktop browsers</span>
        </TableHead>
        <TableHead class="border-b text-center" :colspan="5">
          <Icon
            name="lucide:smartphone"
            class="inline-flex size-4"
            aria-hidden="true"
          />
          <span class="sr-only">Mobile browsers</span>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableHeader>
      <TableRow
        class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
      >
        <TableCell></TableCell>
        <TableHead
          v-for="browser in items[0]?.desktop"
          :key="browser?.name"
          class="text-foreground h-auto py-3 align-bottom"
        >
          <span
            class="relative left-[calc(50%-.5rem)] block rotate-180 leading-4 whitespace-nowrap [text-orientation:sideways] [writing-mode:vertical-rl]"
          >
            {{ browser.name }}
          </span>
        </TableHead>
        <TableHead
          v-for="browser in items[0]?.mobile"
          :key="browser?.name"
          class="text-foreground h-auto py-3 align-bottom"
        >
          <span
            class="relative left-[calc(50%-.5rem)] block rotate-180 leading-4 whitespace-nowrap [text-orientation:sideways] [writing-mode:vertical-rl]"
          >
            {{ browser.name }}
          </span>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="item in items"
        :key="item.feature"
        class="*:border-border [&>:not(:last-child)]:border-r"
      >
        <TableHead class="text-foreground font-medium">
          {{ item.feature }}
        </TableHead>
        <TableCell
          v-for="(browser, index) in [...item.desktop, ...item.mobile]"
          :key="`${browser.name}-${index}`"
          class="space-y-1 text-center"
        >
          <Icon
            v-if="browser.supported"
            name="lucide:check"
            class="inline-flex size-4 stroke-emerald-600"
            aria-hidden="true"
          />
          <Icon
            v-else
            name="lucide:x"
            class="inline-flex size-4 stroke-red-600"
            aria-hidden="true"
          />
          <span class="sr-only">
            {{ browser.supported ? "Supported" : "Not supported" }}
          </span>
          <div class="text-muted-foreground text-xs font-medium">
            {{ browser.version }}
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
