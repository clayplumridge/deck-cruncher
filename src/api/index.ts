import axios, { AxiosResponse } from "axios";
import { NamedArguments, SearchArgs } from "./args.types";
import { Card, CardList } from "./common.types";
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

export const search = createGetApiCall<SearchArgs, CardList>(
    "https://api.scryfall.com/cards/search"
);

// Don't need to memoize since search is already memoized
export function prints(exactName: string): Promise<AxiosResponse<CardList>> {
    return search({ q: `!"${exactName}"`, unique: "prints" });
}
