<script setup lang="ts">
import { ref, useId } from "vue";
// TODO: Implement CheckboxTree component
interface TreeNode {
  id: string;
  label: string;
  defaultChecked?: boolean;
  children?: TreeNode[];
}

const id = useId();

const initialTree: TreeNode = {
  id: "1",
  label: "Natural Wonders",
  children: [
    { id: "2", label: "Mountains", defaultChecked: true },
    {
      id: "3",
      label: "Waterfalls",
      children: [
        { id: "4", label: "Niagara Falls" },
        { id: "5", label: "Angel Falls", defaultChecked: true },
      ],
    },
    { id: "6", label: "Grand Canyon" },
  ],
};

const checkedNodes = ref<Record<string, boolean>>({
  "2": true,
  "5": true,
});
</script>

<template>
  <div class="space-y-3">
    <!-- Since we don't have a CheckboxTree component, we'll render the tree manually -->
    <div class="flex items-center gap-2">
      <Checkbox
        :id="`${id}-${initialTree.id}`"
        v-model="checkedNodes[initialTree.id]"
      />
      <Label :for="`${id}-${initialTree.id}`">{{ initialTree.label }}</Label>
    </div>
    <div v-if="initialTree.children" class="ms-6 space-y-3">
      <template
        v-for="childNode in initialTree.children"
        :key="`${id}-${childNode.id}`"
      >
        <div class="flex items-center gap-2">
          <Checkbox
            :id="`${id}-${childNode.id}`"
            v-model="checkedNodes[childNode.id]"
          />
          <Label :for="`${id}-${childNode.id}`">{{ childNode.label }}</Label>
        </div>
        <div v-if="childNode.children" class="ms-6 space-y-3">
          <template
            v-for="grandChild in childNode.children"
            :key="`${id}-${grandChild.id}`"
          >
            <div class="flex items-center gap-2">
              <Checkbox
                :id="`${id}-${grandChild.id}`"
                v-model="checkedNodes[grandChild.id]"
              />
              <Label :for="`${id}-${grandChild.id}`">
                {{ grandChild.label }}
              </Label>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
