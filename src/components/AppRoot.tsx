export interface AppRootProps {
    children?: React.ReactNode;
}

export function AppRoot(props: AppRootProps) {
    return (
        <html lang="en">
            <body className="h-dvh bg-red-50">
                {props?.children}
            </body>
        </html>
    );
}