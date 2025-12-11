import { Style } from "@portifolio/utils/style";
import Link from "next/link";

export interface ActionMenuItemProps extends React.ComponentProps<"li"> {
    link: string;
    label: string;
}

export function ActionMenuItem({ link, label, className, ...props }: ActionMenuItemProps) {
    return (
        <li {...props} className={Style.join("text-nowrap", className)} >
            <Link href={link}>
                {label}
            </Link>
        </li>
    );
}

export default ActionMenuItem;
