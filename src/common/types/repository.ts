import { LocaleText } from "./text";
import { Technology } from "./technology";

export type Repository = {
    label: string;
    url: string;
    description: LocaleText;
    technologies: Technology[];
};