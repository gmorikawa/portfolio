import { FlexContainer, FlexContainerProps } from "./FlexContainer";

export interface StackContainerProps extends FlexContainerProps { }

export function StackContainer({ className, ...props }: StackContainerProps) {
    return (
        <FlexContainer
            direction="column"
            className={className}
            {...props}
        />
    );
}

export default StackContainer;