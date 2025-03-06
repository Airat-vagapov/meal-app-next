export interface IMealInfoElement {
    name: string;
    value: string | number | boolean;
    icon?: string;
    type?: string;
}

export interface IMealSearchParams {
    search: string,
    number: number,
    offset: number
}