<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
    <Card class="col-span-1 gap-2 p-2 lg:col-span-2">
      <div class="bg-muted h-56 w-full rounded-md border"></div>
      <CardHeader class="p-2">
        <CardTitle>Smart Analytics Dashboard</CardTitle>
        <CardDescription>
          Get real-time insights with customizable widgets and interactive data
          visualization tools.
        </CardDescription>
      </CardHeader>
    </Card>

    <Card class="col-span-1 gap-2 p-2 lg:col-span-2">
      <div class="bg-muted h-56 w-full rounded-md border"></div>
      <CardHeader class="p-2">
        <CardTitle>Cross-Platform Integration</CardTitle>
        <CardDescription>
          Seamlessly connect with your favorite tools and services through our
          extensive API ecosystem.
        </CardDescription>
      </CardHeader>
    </Card>

    <Card class="col-span-1 gap-2 p-2 lg:col-span-2">
      <div class="bg-muted h-56 w-full rounded-md border"></div>
      <CardHeader class="p-2">
        <CardTitle>Advanced Security Suite</CardTitle>
        <CardDescription>
          Enterprise-grade security with end-to-end encryption and multi-factor
          authentication.
        </CardDescription>
      </CardHeader>
    </Card>

    <Card class="col-span-1 gap-2 p-2 lg:col-span-3">
      <div class="bg-muted h-56 w-full rounded-md border"></div>
      <CardHeader class="p-2">
        <CardTitle>Automated Workflow Builder</CardTitle>
        <CardDescription>
          Create custom workflows with drag-and-drop interface and no-code
          automation tools.
        </CardDescription>
      </CardHeader>
    </Card>

    <Card class="col-span-1 gap-2 p-2 lg:col-span-3">
      <div class="bg-muted h-56 w-full rounded-md border"></div>
      <CardHeader class="p-2">
        <CardTitle>AI-Powered Insights</CardTitle>
        <CardDescription>
          Leverage machine learning to predict trends and provide actionable
          business recommendations.
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>
