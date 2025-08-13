import type { Metadata } from "next";
import "./globals.css";
import { AppRoot } from "@portifolio/components/AppRoot";
import { ApplicationLayout } from "@portifolio/components/ApplicationLayout";
import { NavigationMenu } from "./navigation-menu";

export const metadata: Metadata = {
    title: "Gabriel Morikawa | Software Developer, Full-Stack Developer, Game Developer",
    description: "Welcome to my portifolio!",
};

export default function RootLayout(props: Readonly<{ children: React.ReactNode; }>) {
    return (
        <AppRoot className="bg-gray-50">
            <ApplicationLayout
                main={props.children}
            />
        </AppRoot>
    );
}
