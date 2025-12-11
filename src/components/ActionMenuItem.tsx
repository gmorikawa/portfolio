import { Style } from "@portifolio/utils/style";
import Link from "next/link";

export interface ActionMenuItemProps extends React.ComponentProps<"li"> {
    icon?: React.ReactNode;
    link: string;
    label: string;
}

export function ActionMenuItem({ icon, link, label, className, ...props }: ActionMenuItemProps) {
    return (
        <li {...props} className={Style.join("text-nowrap", className)} >
            <Link href={link} className="flex items-center gap-2">
                {icon} {label}
            </Link>
        </li>
    );
}

export default ActionMenuItem;
