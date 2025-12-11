import { Style } from "@portifolio/utils/style";

export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export function Hyperlink(props: HyperlinkProps) {
    const defaultClasses = "pointer italic";
    return (
        <a
            {...props}
            className={Style.join(defaultClasses, props.className)}
        >
            {props.children}
        </a>
    );
}

export default Hyperlink;
