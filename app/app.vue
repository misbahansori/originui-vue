<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Import fonts */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap");

/* Apply font variables to :root */
:root {
  --font-sans: "Inter", sans-serif;
  --font-heading: "Outfit", sans-serif;
}

/* Global styles */
body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

.font-heading {
  font-family: var(--font-heading);
}
</style>
