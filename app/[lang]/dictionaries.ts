const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type TranslationFunction = (
  key: string,
  variables?: Record<string, string>
) => string;

/**
 * Returns a translation function 't' that can resolve nested keys using dot notation.
 * Example: t('home.heroTitle')
 */
export async function getTranslation(locale: Locale): Promise<TranslationFunction> {
  const dict = await getDictionary(locale);

  return (key: string, variables?: Record<string, string>): string => {
    // Resolve nested dot notation keys (e.g. 'home.heroTitle')
    const value = key.split(".").reduce((obj: any, k) => {
      return obj && typeof obj === "object" ? obj[k] : undefined;
    }, dict);

    // If key not found, return the key as fallback
    if (value === undefined || value === null) {
      return key;
    }

    let result = String(value);

    // Replace placeholders like {variableName}
    if (variables) {
      Object.entries(variables).forEach(([k, v]) => {
        result = result.replace(new RegExp(`{${k}}`, "g"), v);
      });
    }

    return result;
  };
}
