import { useState } from "react";
import Container from "../Container/Container";
import SearchForm from "./SearchForm/SearchForm";
import SearchResultList from './SearchResultList/SearchResultList'
import ErrorBlock from '@/components/ErrorBlock/ErrorBlock'

import styles from '@/components/SearchBlock/SearchForm/SearchForm.module.sass';

const SearchBlock = () => {
    // States
    const [meals, setMeals] = useState<any[]>();
    const [isDataReady, setIsDataReady] = useState<boolean>(false);
    const [isFetchError, setIsFetchError] = useState<boolean>(false);
    const [fetchErrorData, setFetchErrorData] = useState<any>(null);

    return (
        <Container>
            <div className={styles.searchFormBlock}>
                <SearchForm
                    setMealData={(v) => setMeals(v)}
                    toUp={isDataReady}
                    setIsDataReady={setIsDataReady}
                    setIsFetchError={setIsFetchError}
                    setFetchErrorData={setFetchErrorData}
                />
                {meals?.length && <SearchResultList data={meals} />}
    
                {isFetchError && <ErrorBlock data={fetchErrorData} />}
            </div>
        </Container >
    )
}

export default SearchBlock;