import { Style } from "@portifolio/utils/style";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> { }

export function Text({ children, className, ...props }: TextProps) {
    const defaultClasses = "inline-block";

    return (
        <span className={Style.join(defaultClasses, className)} {...props}>
            {children}
        </span>
    );
}

export default Text;