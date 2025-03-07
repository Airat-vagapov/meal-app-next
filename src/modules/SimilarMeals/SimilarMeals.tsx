import { useGetSimilarMealByIdQuery } from '@/services/mealApi'
import MealCard from '@/components/MealCard/MealCard'
import List from '@/ui/List/List'
import Content from '@/ui/Content/Content'
import SubTitle from '@/ui/SubTitle/SubTitle'

import styles from './SimilarMeals.module.sass'

const SimilarMeals = ({ id }: { id: string }) => {
    const { data, isFetching, isLoading } = useGetSimilarMealByIdQuery(id)

    console.log(data)
    return (
        <div>
            <SubTitle>Similar dishes</SubTitle>
            <List>
                {data && data.map((meal: any, index: number) => {
                    return (
                        <MealCard key={index} meal={meal} color='white'></MealCard>
                    )
                })}
            </List>
        </div>
    )
}

export default SimilarMeals;