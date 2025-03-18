import type I18nKeys from "./keys";
import { en } from "./languages/en";
import { jp } from "./languages/jp";
import { zh_CN } from "./languages/zh_cn";

export type Translation = {
  [K in I18nKeys]: string;
};

const map: { [key: string]: Translation } = {
  en: en,
  jp: jp,
  "zh-cn": zh_CN,
};

export function getTranslation(lang: string = "en"): Translation {
  return map[lang.toLowerCase()] || en;
}

export function i18n(key: I18nKeys, ...interpolations: string[]): string {
  const lang = "en";
  let translation = getTranslation(lang)[key];

  interpolations.forEach((interpolation) => {
    translation = translation.replace("{{}}", interpolation);
  });

  return translation;
}
