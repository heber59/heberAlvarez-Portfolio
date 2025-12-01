import { esCopy } from "./es";
import { enCopy } from "./en";

export const copy = {
  es: esCopy,
  en: enCopy,
};

export type SupportedLang = keyof typeof copy;
