import { useSearchParams } from "next/navigation";
import { useFetchMealsByNameQuery } from '@/services/mealApi'
import { IMealSearchParams } from '@/types/meal'


import MealCard from '@/components/MealCard/MealCard'

import styles from '@/components/MealList/MealList.module.sass'
import Pagination from '@/ui/Pagination/Pagination'
import { useEffect, useState } from 'react'


interface IMealList {
    // query: string;
    // page: number;
}

// let page = 0;
// let searchQuery = '';

const MealList: React.FC<IMealList> = () => {
    // States
    const [page, setPage] = useState<number>(0)
    const [query, setQuery] = useState<string>('')

    // Get URL params
    const searchParams = useSearchParams()

    useEffect(() => {
        const searchQuery = searchParams.get("query") ?? '';
        setQuery(searchQuery)
        const pageData = Number(searchParams.get("page")) ?? 0;
        setPage(pageData)
    }, [searchParams]);



    const url = window.location.href;
    const searchOffset = (page - 1) * 10 ?? 0
    const searchData: IMealSearchParams = {
        search: query,
        number: 12,
        offset: searchOffset ?? 0,
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

            <Pagination url={url} page={page}></Pagination>
        </>
    )

}

export default MealList;