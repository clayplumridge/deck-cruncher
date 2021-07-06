interface BaseNamedArguments {
    set?: string;
    format?: string;
    pretty: boolean;
}

interface ExactNamedArguments {
    exact: string;
}

interface FuzzyNamedArguments {
    fuzzy: string;
}

export type NamedArguments = ExactNamedArguments | FuzzyNamedArguments;

export interface SearchArgs {
    q: string;
    unique?: "cards" | "art" | "prints";
    order?:
        | "name"
        | "set"
        | "released"
        | "rarity"
        | "color"
        | "usd"
        | "tix"
        | "eur"
        | "cmc"
        | "power"
        | "toughness"
        | "edhrec"
        | "artist";
    dir?: "auto" | "asc" | "desc";
    include_extras?: boolean;
    include_multilingual?: boolean;
    include_variations?: boolean;
    page?: number;
    format?: "json" | "csv";
    pretty?: boolean;
}
