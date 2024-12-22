import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mealSearchApi = createApi({
    reducerPath: 'mealSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/complexSearch/",
    }),
    endpoints: (build) => ({
        getMealsByName: build.mutation<any, string>({
            query: (value) => `?apiKey=dbd53329fdd54f889424c42c0e88987f&query=${value}&number=20`
        })
    }),

})

const mealApi = createApi({
    reducerPath: 'mealApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/",
    }),
    endpoints: (build) => ({
        getMealById: build.query<any, string>({
            query: (id) => `${id}/information/?apiKey=dbd53329fdd54f889424c42c0e88987f&addTasteData=true&addWinePairing=true`,
            keepUnusedDataFor: 360000,
        })
    }),
})

export const {useGetMealsByNameMutation} = mealSearchApi
export const {useGetMealByIdQuery} = mealApi
export const {getMealById} = mealApi.endpoints
export {mealSearchApi, mealApi};