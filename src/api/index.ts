import axios, { AxiosResponse } from "axios";
import { Card, NamedArguments, SearchArgs } from "./card.types";
import { CatalogType } from "./catalog.types";
import { ScryCatalog, ScryList } from "./common.types";
import { MagicSet } from "./set.types";
import { memoizeApiCall } from "./util";

function createGetApiCall<Args, Response>(
    baseUrl: string
): (args: Args) => Promise<AxiosResponse<Response>> {
    return memoizeApiCall((args: Args) =>
        axios.get<Response>(baseUrl, {
            params: args
        })
    );
}

export const named = createGetApiCall<NamedArguments, Card>(
    "https://api.scryfall.com/cards/named"
);

export const search = createGetApiCall<SearchArgs, ScryList<Card>>(
    "https://api.scryfall.com/cards/search"
);

// Don't need to memoize since search is already memoized
export function prints(
    exactName: string
): Promise<AxiosResponse<ScryList<Card>>> {
    return search({ q: `!"${exactName}"`, unique: "prints" });
}

export const sets = createGetApiCall<{}, ScryList<MagicSet>>(
    "https://api.scryfall.com/sets"
);

// TODO(clay): Fix type inference for the memoize function
export const setByCode = memoizeApiCall<
    MagicSet,
    (x: string) => Promise<AxiosResponse<MagicSet>>
>((code: string) => {
    const url = `https://api.scryfall.com/sets/${code}`;
    return axios.get<MagicSet>(url);
});

export const catalog = memoizeApiCall<
    ScryCatalog<string>,
    (x: CatalogType) => Promise<AxiosResponse<ScryCatalog<string>>>
>((catalogType: CatalogType) => {
    const url = `https://api.scryfall.com/catalog/${catalogType}`;
    return axios.get<ScryCatalog<string>>(url);
});
