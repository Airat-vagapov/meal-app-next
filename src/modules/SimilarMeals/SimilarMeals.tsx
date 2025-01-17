import { useGetSimilarMealByIdQuery } from '@/services/mealApi'
import MealCard from '@/components/MealCard/MealCard'
import List from '@/UI/List/List'
import Content from '@/UI/Content/Content'
import SubTitle from '@/UI/SubTitle/SubTitle'

import styles from './SimilarMeals.module.sass'

const SimilarMeals = ({ id }: { id: string }) => {
    const { data, isFetching, isLoading } = useGetSimilarMealByIdQuery(id)

    console.log(data)
    return (
        <Content>
            <SubTitle>Similar dishes</SubTitle>
            <List>
                {data && data.map((meal: any, index: number) => {
                    return (
                        <MealCard key={index} meal={meal} color='white'></MealCard>
                    )
                })}
            </List>
        </Content>
    )
}

export default SimilarMeals;