'use client'
import { useGetMealByIdQuery } from "@/services/mealApi";

import PageTitle from "@/UI/PageTitle/PageTitle";
import MealImageCard from '@/components/Meal/MealImageCard/MealImageCard';
import MealInfoCard from '@/components/Meal/MealInfoCard/MealInfoCard'

import styles from '@/components/Meal/MealMainBlock/MealMainBlock.module.sass'

const Meal = ({ id }: { id: string }) => {
    // API
    const { data, isFetching, isLoading } = useGetMealByIdQuery(id)

    return (
        <div className={styles.mealPage}>
            <PageTitle title={data?.title} desc={data?.summary}></PageTitle>
            {data &&
                <div className={styles.meal}>
                    {data?.image && <MealImageCard src={data?.image} />}
                    <MealInfoCard
                        healthScore={data?.healthScore}
                        readyInMinutes={data?.readyInMinutes}
                        cookingMinutes={data?.cookingMinutes}
                        preparationMinutes={data?.preparationMinutes}
                        vegan={data?.vegan}
                        veryHealthy={data?.veryHealthy}
                        veryPopular={data?.veryPopular}
                        spoonacularScore={data?.spoonacularScore}
                        weightWatcherSmartPoints={data?.weightWatcherSmartPoints}
                        glutenFree={data?.glutenFree}
                        dairyFree={data?.dairyFree}
                        cheap={data?.cheap}
                    />
                </div>
            }

        </div>
    )
}

export default Meal;