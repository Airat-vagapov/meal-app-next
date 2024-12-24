"use client"

import { useRouter } from "next/router";

import { getMealById } from "@/services/mealApi"
import { store } from "@/store/store";

import Meal from "@/components/Meal/Meal";
import Container from "@/components/Container/Container";
import { Provider } from "react-redux";


interface MealPageProps {
    params: { id: string }
}

const MealPage = ({ params }: MealPageProps) => {
    const { id } = params;
    // const response = await store.dispatch(getMealById.initiate(id));
    return (
        <Provider store={store}>
            <Container>
                <Meal id={id} />
            </Container>
        </Provider>
    )
}

export default MealPage;    