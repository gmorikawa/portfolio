'use client'
import { LanguageISOCode } from "@portifolio/common/types/language";
import { FlagEmoji } from "@portifolio/utils/emoji";
import { Style } from "@portifolio/utils/style";
import { changeLanguage } from "./actions";

export interface LanguageButtonProps extends Omit<React.ComponentProps<"div">, "onClick"> {
    language: LanguageISOCode;
    onClick?: (e: React.MouseEvent, language: LanguageISOCode) => void;
}

export function LanguageButton({ language, children, className, onClick, ...props }: LanguageButtonProps) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick)
            onClick(e, language);
    };

    return (
        <div
            onClick={handleClick}
            className={Style.join("cursor-pointer text-2xl md:text-xl select-none", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export type LanguageSelectorProps = React.ComponentProps<"div">;

export function LanguageSelector({ className, ...props }: LanguageSelectorProps) {
    const handleClick = (e: React.MouseEvent, language: LanguageISOCode) => {
        changeLanguage(language);
    };

    return (
        <div className={Style.join("flex flex-row gap-1", className)} {...props}>
            <LanguageButton onClick={handleClick} language={LanguageISOCode.BRAZILIAN_PORTUGUESE}>{FlagEmoji.BRAZIL_FLAG}</LanguageButton>
            <LanguageButton onClick={handleClick} language={LanguageISOCode.AMERICAN_ENGLISH}>{FlagEmoji.AMERICA_FLAG}</LanguageButton>
            <LanguageButton onClick={handleClick} language={LanguageISOCode.JAPANESE}>{FlagEmoji.JAPAN_FLAG}</LanguageButton>
        </div>
    );
}
