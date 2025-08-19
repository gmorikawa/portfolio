import { LanguageISOCode } from "@portifolio/types/language";
import { cookies } from "next/headers";

import portuguese from "./locales/pt-BR.json";
import english from "./locales/en-US.json";
import japanese from "./locales/ja-JP.json";

export async function getTranslation() {
    const cookiesStore = await cookies();

    const language = cookiesStore.get("language")?.value as LanguageISOCode ?? LanguageISOCode.AMERICAN_ENGLISH;

    const contexts = {
        [LanguageISOCode.BRAZILIAN_PORTUGUESE]: portuguese,
        [LanguageISOCode.AMERICAN_ENGLISH]: english,
        [LanguageISOCode.JAPANESE]: japanese,
    };

    return contexts[language];
}