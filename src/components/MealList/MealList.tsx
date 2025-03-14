'use client'

import { useSearchParams } from "next/navigation";
import { useFetchMealsByNameQuery } from '@/services/mealApi'
import { IMealSearchParams, IMealCard } from '@/types/meal'


import MealCard from '@/components/MealCard/MealCard'

import styles from '@/components/MealList/MealList.module.sass'
import Pagination from '@/ui/Pagination/Pagination'
import { useEffect, useState } from 'react'
import Preloader from "@/ui/Preloader/Preloader";


interface IMealList {
    // query: string;
    // page: number;
    searchParams: URLSearchParams;
}

const MealList: React.FC<IMealList> = ({ searchParams }) => {
    // States
    const [page, setPage] = useState<number>(0)
    const [query, setQuery] = useState<string>('')

    // Get URL params
    // const searchParams = useSearchParams()

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
    const { data, isLoading, isFetching } = useFetchMealsByNameQuery(searchData)

    return (
        <>
            {isFetching && <Preloader />}
            <div className={styles.mealListGrid}>
                {data?.results && data.results.map((item: IMealCard, index: number) => {
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