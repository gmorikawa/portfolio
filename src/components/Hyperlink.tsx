export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export function Hyperlink(props: HyperlinkProps) {
    return (
        <a
            {...props}
            className={`pointer ${props.className ?? ""}`}
        >
            {props.children}
        </a>
    );
}
