<script setup lang="ts">
import { LucideIdCard, LucideUser } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex w-full max-w-md flex-col gap-6">
      <div class="flex flex-col gap-2 self-center text-center">
        <h1 class="text-lg font-bold">No data found</h1>
        <p class="text-muted-foreground text-sm">
          It looks like there's no data in this page. Please create a new one
          using the buttons below.
        </p>
      </div>
      <Card class="relative overflow-hidden">
        <CardHeader>
          <CardTitle>Create new account</CardTitle>
          <CardDescription>
            Create a new account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Create account</Button>
        </CardContent>
        <div class="absolute -right-6 -bottom-6">
          <LucideUser class="text-muted size-32" />
        </div>
      </Card>
      <Card class="relative overflow-hidden">
        <CardHeader>
          <CardTitle>Add new card</CardTitle>
          <CardDescription>
            Add a new card to your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Add card</Button>
        </CardContent>
        <div class="absolute -right-6 -bottom-6">
          <LucideIdCard class="text-muted size-32" />
        </div>
      </Card>
    </div>
  </div>
</template>
