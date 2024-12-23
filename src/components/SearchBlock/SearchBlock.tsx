import { useState } from "react";
import Container from "../Container/Container";
import SearchForm from "./SearchForm/SearchForm";
import SearchResultList from './SearchResultList/SearchResultList'

import styles from '@/components/SearchBlock/SearchForm/SearchForm.module.sass';

const SearchBlock = () => {
    // States
    const [meals, setMeals] = useState<any[]>();
    const [isDataReady, setIsDataReady] = useState<boolean>(false);
    return (
        <Container>
            <div className={styles.searchFormBlock}>
                <SearchForm setMealData={(v) => setMeals(v)} toUp={isDataReady} setIsDataReady={setIsDataReady} />
                {meals?.length && <SearchResultList data={meals} />}

            </div>
        </Container >
    )
}

export default SearchBlock;