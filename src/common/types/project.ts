import { LocaleText } from "./text";
import { Repository } from "./repository";

export type Project = {
    title: string;
    description: LocaleText;
    repositories: Repository[];
    icon: string;
};