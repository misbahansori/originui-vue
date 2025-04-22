export const useCommandPalette = () => {
  const open = useState("commandPaletteOpen", () => false);
  const searchQuery = ref("");

  const openCommandPalette = () => {
    searchQuery.value = "";
    open.value = !open.value;
  };

  return { open, searchQuery, openCommandPalette };
};
