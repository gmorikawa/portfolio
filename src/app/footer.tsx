import { Style } from "@portifolio/utils/style";

export type PortifolioFooterProps = React.ComponentProps<"footer">;

export function PortifolioFooter({ className, ...props }: PortifolioFooterProps) {
    return (
        <footer {...props} className={Style.join(className, "p-1 bg-gray-900 text-gray-50 text-right japanese-text")}>
            <p>
                想像力こそが、すべてを変える。
            </p>
        </footer>
    )
}