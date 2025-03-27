<script setup lang="ts">
const formId = "payment-form";
const isDefaultPayment = ref(false);
const cardName = ref("");
const cardNumber = ref("");
const expiryDate = ref("");
const cvc = ref("");
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Card details</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <Icon
            name="lucide:wallet"
            class="size-4 opacity-80"
            aria-hidden="true"
          />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Update your card</DialogTitle>
          <DialogDescription class="text-left">
            Your new card will replace your current card.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <div class="*:not-first:mt-2">
            <Label :for="`name-${formId}`">Name on card</Label>
            <Input
              :id="`name-${formId}`"
              v-model="cardName"
              type="text"
              required
            />
          </div>
          <div class="*:not-first:mt-2">
            <Label :for="`number-${formId}`">Card Number</Label>
            <div class="relative">
              <Input
                :id="`number-${formId}`"
                v-model="cardNumber"
                type="text"
                class="peer pe-9 [direction:inherit]"
                placeholder="1234 5678 9012 3456"
              />
              <div
                class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50"
              >
                <Icon
                  name="lucide:credit-card"
                  class="size-4"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-1 space-y-2">
              <Label :for="`expiry-${formId}`">Expiry date</Label>
              <Input
                :id="`expiry-${formId}`"
                v-model="expiryDate"
                type="text"
                class="[direction:inherit]"
                placeholder="MM/YY"
              />
            </div>
            <div class="flex-1 space-y-2">
              <Label :for="`cvc-${formId}`">CVC</Label>
              <Input
                :id="`cvc-${formId}`"
                v-model="cvc"
                type="text"
                class="[direction:inherit]"
                placeholder="123"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox :id="`primary-${formId}`" v-model="isDefaultPayment" />
          <Label
            :for="`primary-${formId}`"
            class="text-muted-foreground font-normal"
          >
            Set as default payment method
          </Label>
        </div>
        <Button type="button" class="w-full">Update card</Button>
      </form>
    </DialogContent>
  </Dialog>
</template>
