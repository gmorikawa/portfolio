import { Style } from "@portifolio/utils/style";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Container({ className, ...props }: ContainerProps) {
    const defaultClasses = "";

    return (
        <div className={Style.join(defaultClasses, className)} {...props} />
    );
}

export default Container;

