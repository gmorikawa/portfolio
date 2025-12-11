import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { Language } from "./proxies/language";

const DEFAULT_LANGUAGE = "en-US";
const COOKIE_LANGUAGE = "language";

const availableLanguages = [
    { "variation": "en", "target": "en-US" },
    { "variation": "en-us", "target": "en-US" },
    { "variation": "en-US", "target": "en-US" },
    { "variation": "pt", "target": "pt-BR" },
    { "variation": "pt-br", "target": "pt-BR" },
    { "variation": "pt-BR", "target": "pt-BR" },
    { "variation": "ja", "target": "ja-JP" },
    { "variation": "ja-jp", "target": "ja-JP" },
    { "variation": "ja-JP", "target": "ja-JP" }
];

export async function proxy(req: NextRequest) {
    const res = NextResponse.next()
    const language = req.cookies.get(COOKIE_LANGUAGE)?.value || "";
    const clientLanguages = req.headers.get("accept-language") || "";
    const isValidLanguage = Language.isValidLanguage(
        language,
        availableLanguages.map(value => value.target)
    );

    if (isValidLanguage) {
        res.cookies.set(COOKIE_LANGUAGE, language);
    } else {
        const configuredLanguage = Language.configure(
            clientLanguages.split(",").map(lang => lang.split(";")[0]).map(lang => lang.trim()),
            availableLanguages,
            DEFAULT_LANGUAGE
        );

        res.cookies.set(COOKIE_LANGUAGE, configuredLanguage);
    }

    return res;
}
