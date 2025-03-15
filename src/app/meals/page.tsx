'use client'
import { Provider } from "react-redux";
import { store } from '@/store/store'
import { useSearchParams } from "next/navigation";


import Container from '@/components/Container/Container'
import MealList from '@/components/MealList/MealList'
import PageTitle from '@/ui/PageTitle/PageTitle'
import Content from '@/ui/Content/Content'
import { Suspense } from "react";

const MealsPage = () => {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("query") ?? ''
    // const page = Number(searchParams.get("page")) ?? 0

    return (
        <Provider store={store}>
            <Container>
                <Content>
                    <PageTitle title="Meals" desc={'Search result by "' + searchQuery + '"'} />
                    <MealList />
                </Content>
            </Container>
        </Provider>
    )
}

export default MealsPage;