import personal from "@portifolio/data/personal-information.json";

export type PortifolioHeaderProps = React.ComponentProps<"header">;

export function PortifolioHeader({ className, ...props }: PortifolioHeaderProps) {
    return (
        <header {...props} className={["p-10", className].join(" ")}>
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