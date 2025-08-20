import Image from "next/image";

export interface LogoProps {
    src: string;
    label: string;
    size?: number;
}

export function Logo({ src, label, size }: LogoProps) {
    return (
        <Image
            unoptimized
            src={src}
            width={size ?? 50}
            height={size ?? 50}
            alt={label}
        />
    );
}