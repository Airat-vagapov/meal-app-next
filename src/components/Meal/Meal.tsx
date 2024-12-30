'use client'
import { useGetMealByIdQuery } from "@/services/mealApi";

import PageTitle from "@/UI/PageTitle/PageTitle";
import MealMainBlock from "@/components/Meal/MealMainBlock/MealMainBlock"
import MealImageCard from '@/components/Meal/MealImageCard/MealImageCard';
import MealInfoCard from '@/components/Meal/MealInfoCard/MealInfoCard'

import styles from '@/components/Meal/MealMainBlock/MealMainBlock.module.sass'

const Meal = ({ id }: { id: string }) => {
    // API
    const { data, isFetching, isLoading } = useGetMealByIdQuery(id)

    return (
        <div>
            <PageTitle title={data?.title} desc={data?.summary}></PageTitle>
            <div className={styles.meal}>
                <MealImageCard src={data?.image} />
                <MealInfoCard
                    healthScore={data?.healthScore}
                    readyInMinutes={data?.readyInMinutes}
                    vegan={data?.vegan}
                    veryHealthy={data?.veryHealthy}
                    veryPopular={data?.veryPopular}
                    spoonacularScore={data?.spoonacularScore}

                />
            </div>
            {/* <MealMainBlock image={data?.image} /> */}
        </div>
    )
}

export default Meal;