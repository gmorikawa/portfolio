import personal from "@portifolio/data/personal-information.json";
import { Style } from "@portifolio/utils/style";

export type PortifolioHeaderProps = React.ComponentProps<"header">;

export function PortifolioHeader({ className, ...props }: PortifolioHeaderProps) {
    return (
        <header {...props} className={Style.join("p-10", className)}>
            <h4 className="text-lg">
                {personal?.name?.japanese}
            </h4>

            <h2 className="text-4xl">
                {personal?.name?.original}
            </h2>

            <h2 className="text-lg">
                {personal?.title}
            </h2>
        </header>
    )
}