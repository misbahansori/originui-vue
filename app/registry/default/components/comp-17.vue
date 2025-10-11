<script setup lang="ts">
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with start select</Label>
    <ButtonGroup>
      <SelectNative
        class="text-muted-foreground hover:text-foreground w-fit rounded-e-none shadow-none"
      >
        <option value="https://">https://</option>
        <option value="http://">http://</option>
        <option value="ftp://">ftp://</option>
        <option value="sftp://">sftp://</option>
        <option value="ws://">ws://</option>
        <option value="wss://">wss://</option>
      </SelectNative>
      <Input
        :id="id"
        class="-ms-px rounded-s-none shadow-none focus-visible:z-10"
        placeholder="192.168.1.1"
        type="text"
      />
    </ButtonGroup>
  </div>
</template>
