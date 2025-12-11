export interface AppRootProps {
    className?: string;
    children?: React.ReactNode;
}

export function AppRoot(props: AppRootProps) {
    return (
        <html lang="en">
            <body className={["h-dvh", props?.className].join(' ')}>
                {props?.children}
            </body>
        </html>
    );
}

export default AppRoot;