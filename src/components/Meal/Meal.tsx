'use client'
import { useGetMealByIdQuery } from "@/services/mealApi";

import PageTitle from "@/ui/PageTitle/PageTitle";
import MealImageCard from '@/components/Meal/MealImageCard/MealImageCard';
import MealInfoCard from '@/components/Meal/MealInfoCard/MealInfoCard'

import styles from '@/components/Meal/MealMainBlock/MealMainBlock.module.sass'
import TabBlock from "@/components/TabBlock/TabBlock";

import { ITabData } from '@/types/global';
import SimilarMeals from "@/modules/SimilarMeals/SimilarMeals";
import Preloader from "@/ui/Preloader/Preloader";


const Meal = ({ id }: { id: string }) => {
    // API
    const { data, isFetching, isLoading } = useGetMealByIdQuery(id)

    const tabData: ITabData[] = [];

    // General dish info
    tabData.push({
        'name': 'General',
        'data': [
            {
                'name': 'Dish type',
                'data': data?.dishTypes
            },
            {
                'name': 'Diets',
                'data': data?.diets
            },
            {
                'name': 'Cuisines',
                'data': data?.cuisines
            },
        ],
        'type': 'table'
    })

    // Ingredients
    tabData.push({
        'name': 'Ingredients',
        'data': data?.extendedIngredients,
        'type': 'card'

    })

    // Instructions
    tabData.push({
        'name': 'Instructions',
        'data': [
            {
                'name': 'Description',
                'data': data?.instructions
            },
            {
                'name': 'Steps',
                'data': data?.analyzedInstructions
            }
        ],
        'type': 'steps'
    })

    return (
        <>
            {isFetching && <Preloader />}
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

            <TabBlock data={tabData} name={""} />

            <SimilarMeals id={id} />
        </>
    )
}

export default Meal;