import { Style } from "@portifolio/utils/style";

export type MainContainerProps = React.ComponentProps<"main">;

export function MainContainer({ children, className, ...props }: MainContainerProps) {
    return (
        <main {...props} className={Style.join("p-10", className)}>
            {children}
        </main>
    );
}