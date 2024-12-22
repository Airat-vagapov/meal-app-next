'use client'
import { store } from "@/store/store";

import { useSelector } from "react-redux";
import { mealApi, getMealById, useGetMealByIdQuery } from "@/services/mealApi";
import PageTitle from "@/UI/PageTitle/PageTitle";


const Meal = ({ id }: { id: string }) => {
    const { data, isFetching, isLoading } = useGetMealByIdQuery(id)

    // const response = await store.dispatch(getMealById.initiate(id));
    // const meal = useSelector(mealApi.endpoints.getMealById.select(id));
    // const data = response.data

    console.log(data);
    return (
        <div>
            <PageTitle>{data.title}</PageTitle>
        </div>
    )
}

export default Meal;