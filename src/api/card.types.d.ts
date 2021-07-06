interface CardCoreFields {
    arena_id?: number;
    id: string;
    lang: string;
    mtgo_id?: number;
    mtgo_foil_id?: number;
    multiverse_ids?: number[];
    tcgplayer_id?: number;
    cardmarket_id?: number;
    object: "card";
    oracle_id: string;
    prints_search_uri: string;
    rulings_uri: string;
    scryfall_uri: string;
    uri: string;
}

interface CardGameplayFields {
    all_parts?: RelatedCard[];
    card_faces?: CardFace[];
    cmc: number;
    color_identity: Color[];
    color_indicator?: Color[];
    colors?: Color[];
    edhrec_rank?: number;
    foil: boolean;
    hand_modifier?: string;
    keywords: string[];
    layout: CardLayout;
    legalities: {
        standard: LegalityStatus;
        future: LegalityStatus;
        historic: LegalityStatus;
        gladiator: LegalityStatus;
        pioneer: LegalityStatus;
        modern: LegalityStatus;
        legacy: LegalityStatus;
        pauper: LegalityStatus;
        vintage: LegalityStatus;
        penny: LegalityStatus;
        commander: LegalityStatus;
        brawl: LegalityStatus;
        duel: LegalityStatus;
        oldschool: LegalityStatus;
        premodern: LegalityStatus;
    };
    life_modifier?: string;
    loyalty?: string;
    mana_cost?: string;
    name: string;
    nonfoil: boolean;
    oracle_text?: string;
    oversized: boolean;
    power?: string;
    produced_mana?: Color[];
    reserved: boolean;
    toughness?: string;
    type_line: string;
}

interface CardImageUris {
    small?: string;
    normal?: string;
    large?: string;
    png?: string;
    art_crop?: string;
    border_crop?: string;
}

interface CardPrintFields {
    artist?: string;
    booster: boolean;
    border_color: "black" | "borderless" | "gold" | "silver" | "white";
    card_back_id: string;
    collector_number: string;
    content_warning?: boolean;
    digital: boolean;
    flavor_name?: string;
    flavor_text?: string;
    frame_effects: CardFrameEffect[];
    frame: "1993" | "1997" | "2003" | "2015" | "future";
    full_art: boolean;
    games: ("paper" | "arena" | "mtgo")[];
    highres_image: boolean;
    illustration_id?: string;
    image_status: "missing" | "placeholder" | "lowres" | "highres_scan";
    image_uris: CardImageUris;
    prices: {
        usd?: string;
        usd_foil?: string;
        eur?: string;
        eur_foil?: string;
        tix?: string;
    };
    printed_name?: string;
    printed_text?: string;
    printed_type_line?: string;
    promo: boolean;
    promo_types: string[];
    purchase_uris: {
        tcgplayer?: string;
        cardmarket?: string;
        cardhoarder?: string;
    };
    rarity: "common" | "uncommon" | "rare" | "special" | "mythic" | "bonus";
    related_uris: {
        gatherer?: string;
        tcgplayer_infinite_articles?: string;
        tcgplayer_infinite_decks?: string;
        edhrec?: string;
        mtgtop8?: string;
    };
    released_at: string;
    reprint: boolean;
    scryfall_set_uri: string;
    set_name: string;
    set_search_uri: string;
    set_type: string;
    set_uri: string;
    set: string;
    set_id: string;
    story_spotlight: boolean;
    textless: boolean;
    variation: boolean;
    variation_of?: string;
    watermark?: string;
    preview: {
        previewed_at: string;
        source_uri: string;
        source: string;
    };
}

export interface CardFace {
    artist?: string;
    color_indicator?: Color[];
    colors?: Color[];
    flavor_text?: string;
    illustration_id?: string;
    image_uris?: CardImageUris;
    loyalty?: string;
    mana_cost: string;
    name: string;
    object: "card_face";
    oracle_text?: string;
    power?: string;
    printed_name?: string;
    printed_text?: string;
    printed_type_line?: string;
    toughness?: string;
    type_line: string;
    watermark?: string;
}

export interface RelatedCard {
    id: string;
    object: "related_card";
    component: "token" | "meld_part" | "meld_result" | "combo_piece";
    name: string;
    type_line: string;
    uri: string;
}

export type Card = CardCoreFields & CardGameplayFields & CardPrintFields;
export type Color = "W" | "U" | "B" | "R" | "G";
export type LegalityStatus = "legal" | "not_legal";

export type CardLayout =
    | "normal"
    | "split"
    | "flip"
    | "transform"
    | "modal_dfc"
    | "meld"
    | "leveler"
    | "class"
    | "saga"
    | "adventure"
    | "planar"
    | "scheme"
    | "vanguard"
    | "token"
    | "double_faced_token"
    | "emblem"
    | "augment"
    | "host"
    | "art_series"
    | "double_sided";

export type CardFrameEffect =
    | "legendary"
    | "miracle"
    | "nyxtouched"
    | "draft"
    | "devoid"
    | "tombstone"
    | "colorshifted"
    | "inverted"
    | "sunmoondfc"
    | "compasslanddfc"
    | "originpwdfc"
    | "mooneldrazidfc"
    | "waxingandwaningmoondfc"
    | "showcase"
    | "extendedart"
    | "companion"
    | "etched"
    | "snow";

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
