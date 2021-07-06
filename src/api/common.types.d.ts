export interface ScryList<T> {
    object: "list";
    total_cards: number;
    has_more: boolean;
    data: T[];
}

export interface ScryCatalog<T> {
    object: "catalog";
    uri: string;
    total_values: number;
    data: T[];
}
