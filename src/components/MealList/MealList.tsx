import { useFetchMealsByNameQuery } from '@/services/mealApi'
import { IMealSearchParams } from '@/types/meal'


import MealCard from '@/components/MealCard/MealCard'

import styles from '@/components/MealList/MealList.module.sass'
import Pagination from '@/ui/Pagination/Pagination'
import { useState } from 'react'


interface IMealList {
    query: string;
    page: number;
}

const MealList: React.FC<IMealList> = ({ query, page }) => {
    const [currentPage, setCurrentPage] = useState<number>(page)
    const searchOffset = Number(page) - 1

    const searchData: IMealSearchParams = {
        search: query,
        number: 12,
        offset: searchOffset,
    }

    // API
    const { data, isLoading } = useFetchMealsByNameQuery(searchData)

    // Link creation
    const currentUrl = window.location.pathname + window.location.search;
    console.log(currentUrl);

    return (
        <>
            <div className={styles.mealListGrid}>
                {data?.results && data.results.map((item, index) => {
                    return (
                        <>
                            <MealCard meal={item} key={index} color={'white'} column={true} ></MealCard>
                        </>
                    )
                })}
            </div >

            <Pagination link={currentUrl} page={currentPage}></Pagination>
        </>
    )

}

export default MealList;