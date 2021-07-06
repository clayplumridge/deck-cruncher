export interface MagicSet {
    id: string;
    code: string;
    mtgo_code?: string;
    tcgplayer_id?: number;
    name: string;
    set_type: SetType;
    released_at?: string;
    block_code?: string;
    block?: string;
    parent_set_code?: string;
    card_count: number;
    printed_size?: number;
    digital: boolean;
    foil_only: boolean;
    nonfoil_only: boolean;
    scryfall_uri: string;
    uri: string;
    icon_svg_uri: string;
    search_uri: string;
}

export type SetType =
    | "core"
    | "expansion"
    | "masters"
    | "from_the_vault"
    | "spellbook"
    | "premium_deck"
    | "duel_deck"
    | "draft_innovation"
    | "treasure_chest"
    | "commander"
    | "planechase"
    | "archenemy"
    | "vanguard"
    | "funny"
    | "starter"
    | "box"
    | "promo"
    | "token"
    | "memorabilia";
