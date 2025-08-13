export interface AppRootProps {
    children?: React.ReactNode;
}

export function AppRoot(props: AppRootProps) {
    return (
        <html lang="en">
            <body className="h-dvh">
                {props?.children}
            </body>
        </html>
    );
}