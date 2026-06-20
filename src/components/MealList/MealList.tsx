"use client";

import { useGetMealsByNameQuery } from "@/services/mealApi";
import { MealSearchParams, MealCard as MealCardData } from "@/types/meal";

import MealCard from "@/components/MealCard/MealCard";

import styles from "@/components/MealList/MealList.module.sass";
import Pagination from "@/ui/Pagination/Pagination";
import Preloader from "@/ui/Preloader/Preloader";

interface MealListProps {
    searchParams: URLSearchParams;
}

const MealList: React.FC<MealListProps> = ({ searchParams }) => {

    const url = window.location.href;

    // Search data
    let searchOffset;
    let searchData: MealSearchParams;
    const page = Number(searchParams.get("page")) ?? 0;
    if (page > 0) {
        searchOffset = (page - 1) * 10;
    }

    const searchQuery = searchParams.get("query") ?? "";

    searchData = {
        search: searchQuery,
        number: 10,
        offset: searchOffset ?? 0,
    };

    // API
    const { data, isFetching } = useGetMealsByNameQuery(searchData);

    return (
        <>
            {isFetching && <Preloader />}
            <div className={styles.mealListGrid}>
                {data &&
                    data?.results &&
                    data.results.map((item: MealCardData, index: number) => {
                        return (
                            <>
                                <MealCard
                                    meal={item}
                                    key={index}
                                    color={"white"}
                                    column={true}
                                ></MealCard>
                            </>
                        );
                    })}
            </div>
            <Pagination url={url} page={page}></Pagination>
        </>
    );
};

export default MealList;
