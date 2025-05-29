<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent } from "@/registry/default/ui/card";
import { RiBankLine, RiNoCreditCardLine, RiPaypalLine } from "@remixicon/vue";

const id = useId();
const paymentMethods = [
  {
    name: "Credit Card",
    description: "Pay with your credit card",
    icon: RiNoCreditCardLine,
  },
  {
    name: "PayPal",
    description: "Pay with your PayPal account",
    icon: RiPaypalLine,
  },
  {
    name: "Bank Transfer",
    description: "Pay with your bank transfer",
    icon: RiBankLine,
  },
];
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Select payment method</CardTitle>
      <CardDescription>
        Choose your preferred payment method to complete your purchase.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <RadioGroup class="gap-2">
          <div
            v-for="paymentMethod in paymentMethods"
            :key="paymentMethod.name"
            class="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex w-full items-center gap-2 rounded-md border px-4 py-3 shadow-xs outline-none"
          >
            <RadioGroupItem
              :value="paymentMethod.name"
              :id="`${id}-${paymentMethod.name}`"
              :aria-describedby="`${id}-${paymentMethod.name}-description`"
              class="order-1 after:absolute after:inset-0"
            />
            <div
              class="bg-primary/10 flex size-9 items-center justify-center rounded-full"
            >
              <component :is="paymentMethod.icon" class="text-primary size-5" />
            </div>
            <div class="grid grow gap-1">
              <Label :htmlFor="`${id}-${paymentMethod.name}`">
                {{ paymentMethod.name }}
              </Label>
              <p
                :id="`${id}-${paymentMethod.name}-description`"
                class="text-muted-foreground text-xs"
              >
                {{ paymentMethod.description }}
              </p>
            </div>
          </div>
        </RadioGroup>
      </form>
    </CardContent>
    <CardFooter class="gap-2">
      <Button variant="default" class="flex-1">
        <span>Proceed to checkout</span>
      </Button>
      <Button variant="outline" class="flex-1">
        <span>Cancel</span>
      </Button>
    </CardFooter>
  </Card>
</template>
