export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  fixed?: boolean;
  [key: string]: string | boolean | undefined;
}

export { default as MultiSelect } from "./MultiSelect.vue";
