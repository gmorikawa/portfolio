export type LanguageCode = string;
export type Quality = number;
export type VariationMap = Record<LanguageCode, LanguageCode>;

export interface ClientLanguage {
    language: LanguageCode;
    quality: Quality;
}

export interface LanguageVariation {
    variation: LanguageCode;
    target: LanguageCode;
}

export class Language {
    public static configure(
        clientLanguages: Array<LanguageCode>,
        availableLanguages: Array<LanguageVariation>,
        defaultLanguage: LanguageCode
    ): LanguageCode {
        for (const clientLanguage of clientLanguages) {
            const found = availableLanguages
                .find((availableLanguage) => availableLanguage.variation === clientLanguage);

            if (found) {
                return found.target;
            }
        }

        return defaultLanguage;
    }

    public static isValidLanguage(
        language: LanguageCode,
        availableLanguages: Array<LanguageCode>,
    ): boolean {
        return Boolean(
            availableLanguages
                .find((availableLanguage) => availableLanguage === language)
        );
    }
}