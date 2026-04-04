import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMealSearchParams } from "@/types/meal";

const mealSearchApi = createApi({
    reducerPath: "mealSearchApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/meals/",
    }),
    endpoints: (build) => ({
        getMealsByName: build.query<any, IMealSearchParams>({
            query: (data) =>
                `/search/?query=${data.search}&number=${data.number}&offset=${data.offset}`,
        }),
    }),
    keepUnusedDataFor: 600,
});

const mealApi = createApi({
    reducerPath: "mealApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/meals/",
    }),
    tagTypes: ["meal"],
    endpoints: (build) => ({
        getMealById: build.query<any, string>({
            query: (id) =>
                `${id}/information/?addTasteData=true&addWinePairing=true`,
            providesTags: ["meal"],
        }),
        getSimilarMealById: build.query<any, string>({
            query: (id) => `${id}/similar/?number=5&limitLicense=true`,
        }),
        getRandomMeals: build.mutation<any, string>({
            query: (number) => `/random?limitLicense=true&number=${number}`,
        }),
    }),
    keepUnusedDataFor: 600,
});

export const { useGetMealsByNameQuery } = mealSearchApi;
export const { useLazyGetMealsByNameQuery } = mealSearchApi;
// export const { useFetchMealsByNameQuery } = mealSearchApi;

export const { useGetMealByIdQuery } = mealApi;
export const { useGetSimilarMealByIdQuery } = mealApi;
export const { useGetRandomMealsMutation } = mealApi;
export const { getMealById } = mealApi.endpoints;
export { mealSearchApi, mealApi };
