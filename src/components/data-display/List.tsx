import { Style } from "@portifolio/utils/style";

export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> { }

export interface UnorderedListItemProps extends React.LiHTMLAttributes<HTMLLIElement> { }

export function UnorderedList({ children, className, ...props }: UnorderedListProps) {
    const defaultClasses = "list-inside";

    return (
        <ul className={Style.join(defaultClasses, className)} {...props}>
            {children}
        </ul>
    );
}

export function UnorderedListItem({ children, className, ...rest }: UnorderedListItemProps) {
    const defaultClasses = "border-b-1 border-gray-300 pb-2";

    return (
        <li className={Style.join(defaultClasses, className)} {...rest}>
            {children}
        </li>
    );
}

export default {
    Container: UnorderedList,
    Item: UnorderedListItem,
};