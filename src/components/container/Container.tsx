export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Container({ className, ...props }: ContainerProps) {
    return (
        <div {...props} />
    );
}

export default Container;

