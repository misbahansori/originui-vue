<script setup lang="ts">
import { computed, ref } from "vue";

const password = ref("");
const isVisible = ref(false);

function toggleVisibility() {
  isVisible.value = !isVisible.value;
}

function checkStrength(pass: string) {
  const requirements = [
    { regex: /.{8,}/, text: "At least 8 characters" },
    { regex: /[0-9]/, text: "At least 1 number" },
    { regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  ];

  return requirements.map((req) => ({
    met: req.regex.test(pass),
    text: req.text,
  }));
}

const strength = computed(() => checkStrength(password.value));

const strengthScore = computed(() => {
  return strength.value.filter((req) => req.met).length;
});

function getStrengthColor(score: number) {
  if (score === 0) return "bg-border";
  if (score <= 1) return "bg-red-500";
  if (score <= 2) return "bg-orange-500";
  if (score === 3) return "bg-amber-500";
  return "bg-emerald-500";
}

function getStrengthText(score: number) {
  if (score === 0) return "Enter a password";
  if (score <= 2) return "Weak password";
  if (score === 3) return "Medium password";
  return "Strong password";
}
</script>

<template>
  <div>
    <!-- Password input field with toggle visibility button -->
    <div class="*:not-first:mt-2">
      <Label for="password-input">Input with password strength indicator</Label>
      <div class="relative">
        <Input
          id="password-input"
          class="pe-9"
          placeholder="Password"
          :type="isVisible ? 'text' : 'password'"
          v-model="password"
          aria-describedby="password-description"
        />
        <button
          class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          @click="toggleVisibility"
          :aria-label="isVisible ? 'Hide password' : 'Show password'"
          :aria-pressed="isVisible"
          aria-controls="password"
        >
          <Icon
            v-if="isVisible"
            name="lucide:eye-off"
            :size="16"
            aria-hidden="true"
          />
          <Icon v-else name="lucide:eye" :size="16" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Password strength indicator -->
    <div
      class="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
      role="progressbar"
      :aria-valuenow="strengthScore"
      aria-valuemin="0"
      aria-valuemax="4"
      aria-label="Password strength"
    >
      <div
        :class="`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`"
        :style="{ width: `${(strengthScore / 4) * 100}%` }"
      ></div>
    </div>

    <!-- Password strength description -->
    <p
      id="password-description"
      class="text-foreground mb-2 text-sm font-medium"
    >
      {{ getStrengthText(strengthScore) }}. Must contain:
    </p>

    <!-- Password requirements list -->
    <ul class="space-y-1.5" aria-label="Password requirements">
      <li
        v-for="(req, index) in strength"
        :key="index"
        class="flex items-center gap-2"
      >
        <Icon
          v-if="req.met"
          name="lucide:check"
          :size="16"
          class="text-emerald-500"
          aria-hidden="true"
        />
        <Icon
          v-else
          name="lucide:x"
          :size="16"
          class="text-muted-foreground/80"
          aria-hidden="true"
        />
        <span
          :class="`text-xs ${req.met ? 'text-emerald-600' : 'text-muted-foreground'}`"
        >
          {{ req.text }}
          <span class="sr-only">
            {{ req.met ? " - Requirement met" : " - Requirement not met" }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
