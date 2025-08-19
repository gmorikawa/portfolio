import { Style } from "@portifolio/utils/style";

export type NavigationMenuProps = React.ComponentProps<"nav">;

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
    return (
        <nav {...props} className={Style.join("p-5 md:p-10", className)}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}