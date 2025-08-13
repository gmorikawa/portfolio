import { Style } from "@portifolio/utils/style";

export interface MainContainerProps extends React.ComponentProps<"main"> { }

export function MainContainer({ children, className, ...props }: MainContainerProps) {
    return (
        <main className={Style.join("p-10", className)}>
            {children}
        </main>
    );
}