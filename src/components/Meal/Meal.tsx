'use client'
import { useGetMealByIdQuery } from "@/services/mealApi";

import PageTitle from "@/UI/PageTitle/PageTitle";
import MealMainBlock from "@/components/Meal/MealMainBlock/MealMainBlock"


const Meal = ({ id }: { id: string }) => {
    // API
    const { data, isFetching, isLoading } = useGetMealByIdQuery(id)

    return (
        <div>
            <PageTitle title={data?.title} desc={data?.summary}></PageTitle>
            <MealMainBlock />
        </div>
    )
}

export default Meal;