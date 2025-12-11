'use server'

import { LanguageISOCode } from "@portifolio/common/types/language";
import { cookies } from "next/headers";

export async function changeLanguage(language: LanguageISOCode) {
    const cookiesStore = await cookies();

    cookiesStore.set("language", language);
}