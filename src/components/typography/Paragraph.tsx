import { Style } from "@portifolio/utils/style";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export function Paragraph({ children, className, ...props }: ParagraphProps) {
    const defaultClasses = "mb-2";
    return (
        <p className={Style.join(defaultClasses, className)} {...props}>
            {children}
        </p>
    );
}

export default Paragraph;
