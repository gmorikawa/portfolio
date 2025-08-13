export interface ApplicationLayoutProps {
    header?: React.ReactNode;
    side?: React.ReactNode;
    main?: React.ReactNode;
    footer?: React.ReactNode;
}

export function ApplicationLayout(props: ApplicationLayoutProps) {
    return (
        <div className="h-full flex flex-col">
            <div className="basis-auto bg-amber-100">
                {props?.header}
            </div>

            <div className="flex flex-row grow">
                <div className="basis-auto bg-amber-200">
                    {props?.side}
                </div>

                <div className="flex flex-col grow bg-amber-300">
                    <div className="grow">
                        {props?.main}
                    </div>
                    <div className="basis-auto bg-amber-400">
                        {props?.footer}
                    </div>
                </div>
            </div>
        </div>
    );
}