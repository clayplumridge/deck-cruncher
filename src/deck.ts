import { AxiosResponse } from "axios";
import { prints } from "./api";
import { CardList } from "./api/common.types";
import { CardCount } from "./deck.types";
import fs from "fs";

export function decklistToCardCounts(contents: string): CardCount[] {
    const words = contents
        .split("\r\n")
        .filter(x => x !== "")
        .map(x => x.split(" "));

    return words.map(x => {
        const count = Number(x[0]);
        const name = x.slice(1).join(" ");
        return { count, name };
    });
}

export function readDecklistFile(path: string): CardCount[] {
    return decklistToCardCounts(fs.readFileSync(path, "utf-8"));
}

export function attachCardPayloads(
    cards: CardCount[]
): Promise<CardCount & { scryfall: AxiosResponse<CardList> }>[] {
    return cards.map(({ count, name }) => {
        return prints(name).then(x => ({
            count,
            name,
            scryfall: x
        }));
    });
}
