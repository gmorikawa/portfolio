import Link from "next/link";

export interface ActionMenuItemProps extends React.ComponentProps<"li"> {
    link: string;
    label: string;
}

export function ActionMenuItem({ link, label, ...props }: ActionMenuItemProps) {
    return (
        <li {...props}>
            <Link href={link}>
                {label}
            </Link>
        </li>
    );
}
