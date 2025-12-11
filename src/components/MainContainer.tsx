import { Style } from "@portifolio/utils/style";

export type MainContainerProps = React.ComponentProps<"main">;

export function MainContainer({ children, className, ...props }: MainContainerProps) {
    return (
        <main {...props} className={Style.join("p-5 md:p-10", className)}>
            {children}
        </main>
    );
}

export default MainContainer;