"use client"
import { store } from "@/store/store";
import { Provider } from "react-redux";

import Meal from "@/components/Meal/Meal";
import Container from "@/components/Container/Container";
import Content from '@/ui/Content/Content'


interface MealPageProps {
    params: { id: string }
}

const MealPage = ({ params }: MealPageProps) => {
    const { id } = params;
    return (
        <Provider store={store}>
            <Container>
                <Content>
                    <Meal id={id} />
                </Content>
            </Container>
        </Provider>
    )
}

export default MealPage;    