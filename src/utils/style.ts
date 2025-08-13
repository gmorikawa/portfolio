import { Nullable } from "./types";

export class Style {
    static join(...values: Nullable<string>[]): string {
        return values
            .filter((value: Nullable<string>) => Boolean(value))
            .join(" ");
    }
}