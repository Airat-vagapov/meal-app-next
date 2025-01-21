import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mealSearchApi = createApi({
    reducerPath: 'mealSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/complexSearch/",
    }),
    endpoints: (build) => ({
        getMealsByName: build.mutation<any, string>({
            query: (value) => `?apiKey=dbd53329fdd54f889424c42c0e88987f&query=${value}&number=20`
        }),
    }),

})

const mealApi = createApi({
    reducerPath: 'mealApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/",
    }),
    tagTypes: ['meal'],
    endpoints: (build) => ({
        getMealById: build.query<any, string>({
            query: (id) => `${id}/information/?apiKey=dbd53329fdd54f889424c42c0e88987f&addTasteData=true&addWinePairing=true`,
            keepUnusedDataFor: 360000,
            providesTags: ['meal']
        }),
        getSimilarMealById: build.query<any, string>({
            query: (id) => `${id}/similar/?apiKey=dbd53329fdd54f889424c42c0e88987f&number=5&limitLicense=true`
        }),
        getRandomMeals: build.mutation<any, string>({
            query: (number) => `/random?apiKey=dbd53329fdd54f889424c42c0e88987f&limitLicense=true&number=${number}`
        })
    }),
})

export const {useGetMealsByNameMutation} = mealSearchApi
export const {useGetMealByIdQuery} = mealApi
export const {useGetSimilarMealByIdQuery} = mealApi
export const {useGetRandomMealsMutation} = mealApi
export const {getMealById} = mealApi.endpoints
export {mealSearchApi, mealApi};