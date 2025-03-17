import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {IMealSearchParams} from '@/types/meal'

const API_KEY = 'dbd53329fdd54f889424c42c0e88987f'

const mealSearchApi = createApi({
    reducerPath: 'mealSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/complexSearch/",
    }),
    endpoints: (build) => ({
        getMealsByName: build.mutation<any, IMealSearchParams>({
            query: (data) => `?apiKey=${API_KEY}&query=${data.search}&number=${data.number}&offset=${data.offset}`
        }),
        fetchMealsByName: build.query<any, IMealSearchParams>({
            query: (data) => `?apiKey=${API_KEY}&query=${data.search}&number=${data.number}&offset=${data.offset}`,
        })
    }),
    keepUnusedDataFor: 600,
})

const mealApi = createApi({
    reducerPath: 'mealApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/",
    }),
    tagTypes: ['meal'],
    endpoints: (build) => ({
        getMealById: build.query<any, string>({
            query: (id) => `${id}/information/?apiKey=${API_KEY}&addTasteData=true&addWinePairing=true`,
            providesTags: ['meal']
        }),
        getSimilarMealById: build.query<any, string>({
            query: (id) => `${id}/similar/?apiKey=${API_KEY}&number=5&limitLicense=true`
        }),
        getRandomMeals: build.mutation<any, string>({
            query: (number) => `/random?apiKey=${API_KEY}&limitLicense=true&number=${number}`
        })
    }),
    keepUnusedDataFor: 600,
})

export const {useGetMealsByNameMutation} = mealSearchApi
export const {useFetchMealsByNameQuery} = mealSearchApi

export const {useGetMealByIdQuery} = mealApi
export const {useGetSimilarMealByIdQuery} = mealApi
export const {useGetRandomMealsMutation} = mealApi
export const {getMealById} = mealApi.endpoints
export {mealSearchApi, mealApi};