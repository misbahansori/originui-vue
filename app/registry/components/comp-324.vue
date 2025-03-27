<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";

const CORRECT_CODE = "6548";
const value = ref("");
const hasGuessed = ref<boolean | undefined>(undefined);
const inputRef = ref<HTMLInputElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);
const inputId = useId();
const otpValues = ref(["", "", "", ""]);

onMounted(() => {
  if (hasGuessed.value) {
    closeButtonRef.value?.focus();
  }
});

async function onSubmit() {
  inputRef.value?.select();
  await nextTick();

  hasGuessed.value = value.value === CORRECT_CODE;

  value.value = "";
  setTimeout(() => {
    inputRef.value?.blur();
  }, 20);
}

function handleFocus() {
  hasGuessed.value = undefined;
}
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">OTP code</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col items-center gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <svg
            class="stroke-zinc-800 dark:stroke-zinc-100"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="12" fill="none" stroke-width="8" />
          </svg>
        </div>
        <DialogHeader>
          <DialogTitle class="sm:text-center">
            {{ hasGuessed ? "Code verified!" : "Enter confirmation code" }}
          </DialogTitle>
          <DialogDescription class="sm:text-center">
            {{
              hasGuessed
                ? "Your code has been successfully verified."
                : `Check your email and enter the code - Try ${CORRECT_CODE}`
            }}
          </DialogDescription>
        </DialogHeader>
      </div>

      <template v-if="hasGuessed">
        <div class="text-center">
          <DialogClose asChild>
            <Button type="button" ref="closeButtonRef">Close</Button>
          </DialogClose>
        </div>
      </template>
      <template v-else>
        <div class="space-y-4">
          <div class="flex justify-center">
            <PinInput :id="inputId" class="flex items-center gap-3">
              <PinInputGroup class="flex items-center gap-3">
                <PinInputInput
                  v-for="(id, index) in otpValues"
                  :key="id"
                  :index="index"
                  class="focus:border-ring focus:ring-ring/50 border-input size-9 rounded-md border font-medium shadow-xs transition-[color,box-shadow] focus:ring-[3px]"
                ></PinInputInput>
              </PinInputGroup>
            </PinInput>
          </div>
          <p
            v-if="hasGuessed === false"
            class="text-muted-foreground text-center text-xs"
            role="alert"
            aria-live="polite"
          >
            Invalid code. Please try again.
          </p>
          <p class="text-center text-sm">
            <a class="underline hover:no-underline" href="#">Resend code</a>
          </p>
        </div>
      </template>
    </DialogContent>
  </Dialog>
</template>
