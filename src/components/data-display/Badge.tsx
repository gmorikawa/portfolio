import { Style } from "@portifolio/utils/style";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    colorVariant?: ColorVariant;
}

type ColorVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

const colors: Record<ColorVariant, string> = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-200 text-blue-800",
    secondary: "bg-purple-200 text-purple-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    danger: "bg-red-200 text-red-800",
};

export function Badge({ colorVariant, className, ...props }: BadgeProps) {
    const defaultClasses = `inline-block px-2 py-1 text-xs ${colors[colorVariant || "default"]} rounded-full`;

    return (
        <span
            className={Style.join(defaultClasses, className)}
            {...props}
        />
    );
}

export default Badge;
