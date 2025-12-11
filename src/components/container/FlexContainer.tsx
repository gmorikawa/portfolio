import { Style } from "@portifolio/utils/style";
import { ContainerProps } from "./Container";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type JustifyContent = "start" | "center" | "end" | "between" | "around" | "evenly";
type AlignItems = "start" | "center" | "end" | "stretch" | "baseline";

const directions: Record<FlexDirection, string> = {
    "row": "flex-row",
    "row-reverse": "flex-row-reverse",
    "column": "flex-col",
    "column-reverse": "flex-col-reverse",
};

const justifies: Record<JustifyContent, string> = {
    "start": "justify-start",
    "center": "justify-center",
    "end": "justify-end",
    "between": "justify-between",
    "around": "justify-around",
    "evenly": "justify-evenly",
};

const aligns: Record<AlignItems, string> = {
    "start": "items-start",
    "center": "items-center",
    "end": "items-end",
    "stretch": "items-stretch",
    "baseline": "items-baseline",
};

export interface FlexContainerProps extends ContainerProps {
    direction?: FlexDirection;
    justify?: JustifyContent;
    align?: AlignItems;
}

export function FlexContainer({ className, direction, justify, align, ...props }: FlexContainerProps) {
    const defaultClasses = `flex w-full ${directions[direction || "row"]} ${justifies[justify || "start"]} ${aligns[align || "start"]}`;

    return (
        <div
            className={Style.join(defaultClasses, className)}
            {...props}
        />
    );
}

export default FlexContainer;
