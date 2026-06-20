export interface MealInfoElement {
    name: string;
    value: string | number | boolean;
    icon?: string;
    type?: string;
}

export interface MealCard {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface MealSearchParams {
    search: string,
    number: number,
    offset: number
}

export interface MealsSearchResult {
    offset: number;
    number: number;
    totalResults: number;
    results: MealCard[];
}

export interface RandomMealsResult {
    recipes: MealCard[];
}
