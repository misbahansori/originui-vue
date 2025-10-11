<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with start select</Label>
    <InputGroup>
      <InputGroupInput :id="id" placeholder="192.168.1.1" type="text" />
      <InputGroupAddon>
        <SelectNative
          class="text-muted-foreground hover:text-foreground -my-1.5 -ml-3 w-fit border-0 bg-transparent shadow-none"
        >
          <option value="https://">https://</option>
          <option value="http://">http://</option>
          <option value="ftp://">ftp://</option>
          <option value="sftp://">sftp://</option>
          <option value="ws://">ws://</option>
          <option value="wss://">wss://</option>
        </SelectNative>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
