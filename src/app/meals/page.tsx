'use client'
import { Provider } from "react-redux";
import { store } from '@/store/store'
import { useSearchParams } from "next/navigation";

import Container from '@/components/Container/Container'
import MealList from '@/components/MealList/MealList'
import PageTitle from '@/ui/PageTitle/PageTitle'
import Content from '@/ui/Content/Content'

const MealsPage = () => {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("query") ?? ''
    const page = searchParams.get("page") ?? ''

    return (
        <Provider store={store}>
            <Container>
                <Content>
                    <PageTitle title="Meals" desc={'Search result by "' + searchQuery + '"'} />
                    <MealList query={searchQuery} page={page} />
                </Content>
            </Container>
        </Provider>
    )
}

export default MealsPage;