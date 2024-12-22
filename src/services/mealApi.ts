import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mealApi = createApi({
    reducerPath: 'mealApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spoonacular.com/recipes/complexSearch/",
    }),
    endpoints: (build) => ({
        getMealsByName: build.mutation<any, string>({
            query: (value) => `?apiKey=dbd53329fdd54f889424c42c0e88987f&query=${value}&number=20`
        })
    }),

})

export const {useGetMealsByNameMutation} = mealApi
export default mealApi;