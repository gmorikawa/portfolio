import { Style } from "@portifolio/utils/style";

export interface ToolsContainerProps extends React.ComponentProps<"section"> {
    title: string;
}

export function ToolsContainer({ title, children, className, ...props }: ToolsContainerProps) {
    return (
        <section className="pb-10 mb-10 border-b-1 border-gray-300">
            <header className="mb-4">
                <h5 className="font-bold text-2xl">
                    {title}
                </h5>
            </header>

            {children}
        </section>
    );
}