<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { LucideCreditCard } from "lucide-vue-next";
import { vMaska } from "maska/vue";
import { ref, useId } from "vue";

const cardNumber = ref("");

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="`card-number-${id}`">Card Number</Label>
    <InputGroup>
      <InputGroupInput
        :id="`card-number-${id}`"
        v-model="cardNumber"
        class="[direction:inherit]"
        placeholder="0000 0000 0000 0000"
        maxlength="19"
        v-maska="'#### #### #### ####'"
      />
      <InputGroupAddon>
        <LucideCreditCard :size="16" aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with
      <a
        class="hover:text-foreground underline"
        href="https://beholdr.github.io/maska/v3/#/vue"
        target="_blank"
        rel="noopener nofollow"
      >
        maska
      </a>
    </p>
  </div>
</template>
