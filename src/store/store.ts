import { configureStore } from '@reduxjs/toolkit'
import {mealApi, mealSearchApi} from '@/services/mealApi'

export const store = configureStore({
    reducer: {
        [mealApi.reducerPath]: mealApi.reducer,
        [mealSearchApi.reducerPath]: mealSearchApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware, mealSearchApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch