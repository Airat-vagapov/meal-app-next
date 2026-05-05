export interface IMealInfoElement {
    name: string;
    value: string | number | boolean;
    icon?: string;
    type?: string;
}

export interface IMealCard {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface IMealSearchParams {
    search: string,
    number: number,
    offset: number
}

export interface IMealsSearchResult {
    offset: number;
    number: number;
    totalResults: number;
    results: IMealCard[];
}