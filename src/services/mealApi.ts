import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MealByNameRes} from '@/types/meal'

const mealApi = createApi({
    reducerPath: 'mealApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://themealdb.com/api/json/v1/1/",
    }),
    endpoints: (build) => ({
        getMealsByName: build.mutation<any, string>({
            query: (value) => `search.php?s=${value}`
        })
    }),

})

export const {useGetMealsByNameMutation} = mealApi
export default mealApi;