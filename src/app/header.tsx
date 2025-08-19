import personal from "@portifolio/data/personal-information.json";
import { Style } from "@portifolio/utils/style";
import { LanguageSelector } from "./language-selector";

export type PortifolioHeaderProps = React.ComponentProps<"header">;

export function PortifolioHeader({ className, ...props }: PortifolioHeaderProps) {
    return (
        <header {...props} className={Style.join("p-10 flex justify-between", className)}>
            <div className="grow">
                <h4 className="text-lg">
                    {personal?.name?.japanese}
                </h4>

                <h2 className="text-4xl">
                    {personal?.name?.original}
                </h2>

                <h2 className="text-lg">
                    {personal?.title}
                </h2>
            </div>

            <LanguageSelector className="basis-auto" />
        </header>
    )
}