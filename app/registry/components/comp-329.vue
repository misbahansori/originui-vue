<script setup lang="ts">
import { onMounted, ref } from "vue";
import { mask as vMask } from "vue-the-mask";

const id = useId();
const couponInputRef = useTemplateRef("couponInputRef");
const showCouponInput = ref(false);
const couponCode = ref("");

const cardNumber = ref("");
const expiryDate = ref("");
const cvcCode = ref("");

onMounted(() => {
  if (showCouponInput.value && couponInputRef.value) {
    couponInputRef.value?.$el?.focus();
  }
});
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Checkout</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="mb-2 flex flex-col gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <Icon name="lucide:store" class="size-4 opacity-80" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Confirm and pay</DialogTitle>
          <DialogDescription class="text-left">
            Pay securely and cancel any time.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <RadioGroup class="grid-cols-2" defaultValue="yearly">
            <!-- Monthly -->
            <label
              class="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col gap-1 rounded-md border px-4 py-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
            >
              <RadioGroupItem
                id="radio-monthly"
                value="monthly"
                class="sr-only after:absolute after:inset-0"
              />
              <p class="text-foreground text-sm font-medium">Monthly</p>
              <p class="text-muted-foreground text-sm">$32/month</p>
            </label>
            <!-- Yearly -->
            <label
              class="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col gap-1 rounded-md border px-4 py-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
            >
              <RadioGroupItem
                id="radio-yearly"
                value="yearly"
                class="sr-only after:absolute after:inset-0"
              />
              <div class="inline-flex items-start justify-between gap-2">
                <p class="text-foreground text-sm font-medium">Yearly</p>
                <Badge>Popular</Badge>
              </div>
              <p class="text-muted-foreground text-sm">$320/month</p>
            </label>
          </RadioGroup>
          <div class="*:not-first:mt-2">
            <Label :htmlFor="`name-${id}`">Name on card</Label>
            <Input :id="`name-${id}`" type="text" required />
          </div>
          <div class="*:not-first:mt-2">
            <legend class="text-foreground text-sm font-medium">
              Card Details
            </legend>
            <div class="rounded-md shadow-xs">
              <div class="relative focus-within:z-10">
                <Input
                  class="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                  id="card-number"
                  v-model="cardNumber"
                  v-mask="'#### #### #### ####'"
                  placeholder="0000 0000 0000 0000"
                  maxlength="19"
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
              <div class="-mt-px flex">
                <div class="min-w-0 flex-1 focus-within:z-10">
                  <Input
                    class="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                    id="expiry-date"
                    v-model="expiryDate"
                    v-mask="'##/##'"
                    placeholder="MM/YY"
                    maxlength="5"
                  />
                </div>
                <div class="-ms-px min-w-0 flex-1 focus-within:z-10">
                  <Input
                    class="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                    id="cvc-code"
                    v-model="cvcCode"
                    v-mask="'###'"
                    placeholder="CVC"
                    maxlength="4"
                    type="password"
                  />
                </div>
              </div>
            </div>
          </div>
          <template v-if="!showCouponInput">
            <button
              type="button"
              @click="showCouponInput = true"
              class="text-sm underline hover:no-underline"
            >
              + Add coupon
            </button>
          </template>
          <template v-else>
            <div class="*:not-first:mt-2">
              <Label :htmlFor="`coupon-${id}`">Coupon code</Label>
              <Input
                :id="`coupon-${id}`"
                ref="couponInputRef"
                placeholder="Enter your code"
                v-model="couponCode"
              />
            </div>
          </template>
        </div>
        <Button type="button" class="w-full">Subscribe</Button>
      </form>

      <p class="text-muted-foreground text-center text-xs">
        Payments are non-refundable. Cancel anytime.
      </p>
    </DialogContent>
  </Dialog>
</template>
