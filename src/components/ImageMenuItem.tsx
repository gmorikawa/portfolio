import { Style } from "@portifolio/utils/style";
import { Nullable } from "@portifolio/utils/types";
import Image from "next/image";

export interface ImageMenuItemProps extends React.ComponentProps<"li"> {
    image: string;
    label: string;
    width?: Nullable<number>;
    height?: Nullable<number>;
}

export function ImageMenuItem({ image, label, width, height, className, ...props }: ImageMenuItemProps) {
    return (
        <li {...props} className={Style.join("flex flex-row gap-5 items-center-safe p-2", className)}>
            <Image unoptimized src={image} width={width || 50} height={height || 50} alt={label} />
            <p>
                {label}
            </p>
        </li>
    );
}
