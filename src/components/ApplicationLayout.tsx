export interface ApplicationLayoutProps {
    header?: React.ReactNode;
    side?: React.ReactNode;
    main?: React.ReactNode;
    footer?: React.ReactNode;
}

export function ApplicationLayout(props: ApplicationLayoutProps) {
    return (
        <div className="h-full flex flex-col">
            <div className="basis-auto">
                {props?.header}
            </div>

            <div className="flex flex-row grow">
                <div className="basis-auto">
                    {props?.side}
                </div>

                <div className="grow">
                    {props?.main}
                </div>
            </div>

            <div className="basis-auto">
                {props?.footer}
            </div>
        </div>
    );
}