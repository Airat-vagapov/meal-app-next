import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMealSearchParams } from "@/types/meal";

const mealApi = createApi({
    reducerPath: "mealApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/meals/",
    }),
    tagTypes: ["meal"],
    endpoints: (build) => ({
        getMealsByName: build.query<any, IMealSearchParams>({
            query: (data) =>
                `search/?query=${data.search}&number=${data.number}&offset=${data.offset}`,
        }),
        getMealById: build.query<any, string>({
            query: (id) =>
                `${id}/information/?addTasteData=true&addWinePairing=true`,
            providesTags: ["meal"],
        }),
        getSimilarMealById: build.query<any, string>({
            query: (id) => `${id}/similar/?number=5&limitLicense=true`,
        }),
        getRandomMeals: build.query<any, string>({
            query: (number) => `random?limitLicense=true&number=${number}`,
        }),
    }),
    keepUnusedDataFor: 600,
});

export const { useGetMealsByNameQuery } = mealApi;
export const { useLazyGetMealsByNameQuery } = mealApi;
export const { useGetMealByIdQuery } = mealApi;
export const { useGetSimilarMealByIdQuery } = mealApi;
export const { useLazyGetRandomMealsQuery } = mealApi;
export const { getMealById } = mealApi.endpoints;
export { mealApi };
