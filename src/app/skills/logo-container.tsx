import { Style } from "@portifolio/utils/style";

export type LogoContainerProps = React.ComponentProps<"div">;

export function LogoContainer({ children, className, ...props }: LogoContainerProps) {
    return (
        <div
            style={{ scrollbarWidth: "none" }}
            className={Style.join("flex flex-row gap-4 overflow-x-auto", className)}
        >
            {children}
        </div>
    );
}