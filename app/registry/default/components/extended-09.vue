<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/default/ui/empty";
import { LucideIdCard, LucideUser } from "lucide-vue-next";
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyTitle class="font-semibold">No data found</EmptyTitle>
      <EmptyDescription>
        It looks like there's no data in this page. Please create a new one using the buttons below.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent class="w-full max-w-md">
      <Card class="relative w-full overflow-hidden text-left">
        <CardHeader>
          <CardTitle>Create new account</CardTitle>
          <CardDescription>Create a new account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Create account</Button>
        </CardContent>
        <div class="absolute -right-6 -bottom-6">
          <LucideUser class="text-muted size-32" />
        </div>
      </Card>
      <Card class="relative w-full overflow-hidden text-left">
        <CardHeader>
          <CardTitle>Add new card</CardTitle>
          <CardDescription>Add a new card to your account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Add card</Button>
        </CardContent>
        <div class="absolute -right-6 -bottom-6">
          <LucideIdCard class="text-muted size-32" />
        </div>
      </Card>
    </EmptyContent>
  </Empty>
</template>
