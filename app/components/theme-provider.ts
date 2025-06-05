import { inject } from "vue";

type Theme = "dark" | "light" | "system";

interface ThemeProvider {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function useTheme() {
  const themeProvider = inject<ThemeProvider>("theme-provider");
  if (!themeProvider) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeProvider;
}
